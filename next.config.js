/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "/image/**",
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
            },
        ],
    },
    experimental: {
        swcPlugins: [["@swc-jotai/react-refresh", {}]],
    },
};

module.exports = nextConfig;
