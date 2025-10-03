# Stage 1: Build the React application
# Use a specific and minimal base image like alpine for smaller size
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files first to leverage Docker's layer caching
COPY package*.json ./

# Use npm ci for deterministic, faster, and more secure builds
RUN npm ci

# Copy the rest of the application source code
# A .dockerignore file should be used to exclude node_modules, .env, etc.
COPY . .

# --- Environment Variable Handling ---
# This is the key change. We define an argument that can be passed during the build.
# Set a default value to avoid build errors if it's not provided.
ARG VITE_API_URL=https://api.ryuuzu.xyz
ENV VITE_API_URL=$VITE_API_URL
ARG VITE_CLARITY_PROJECT_ID=impchiwk8z
ENV VITE_CLARITY_PROJECT_ID=$VITE_CLARITY_PROJECT_ID

# Build the application. The build script will now use the ENV variable defined above.
RUN npm run build

# Stage 2: Serve the application using Nginx
# Use a specific and minimal base image
FROM nginx:1.25-alpine

# Copy the custom Nginx configuration
COPY custom.conf /etc/nginx/conf.d/default.conf

# Remove the default Nginx welcome page
RUN rm /usr/share/nginx/html/index.html

# Copy the built static files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]