module.exports = {
    apps: [
        {
            name: "ryuuzu-portfolio-nextjs-5000",
            cwd: "/srv/ryuuzu.xyz/frontend",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
