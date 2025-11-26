# Stage 1: Build the React application
# Use the official Bun alpine image for smaller size
FROM oven/bun:1-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files first to leverage Docker's layer caching
# We copy bun.lockb (if existing) or package-lock.json to handle dependencies
COPY package.json bun.lockb* package-lock.json* ./

# Use bun install with --frozen-lockfile for deterministic builds
# (Equivalent to npm ci)
RUN bun install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# --- Environment Variable Handling ---
# These arguments are passed during the build.
ARG VITE_API_URL=https://api.ryuuzu.xyz
ENV VITE_API_URL=$VITE_API_URL
ARG VITE_CLARITY_PROJECT_ID=impchiwk8z
ENV VITE_CLARITY_PROJECT_ID=$VITE_CLARITY_PROJECT_ID

# Build the application using Bun
RUN bun run build

# Stage 2: Serve the application using Nginx
# (This stage remains exactly the same as Nginx only serves static files)
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