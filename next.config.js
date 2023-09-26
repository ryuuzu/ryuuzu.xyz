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
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "8000",
            },
            {
                protocol: "https",
                hostname: "api.ryuuzu.xyz",
                port: "",
            },
        ],
    },
    experimental: {
        swcPlugins: [["@swc-jotai/react-refresh", {}]],
    },
};

module.exports = nextConfig;
