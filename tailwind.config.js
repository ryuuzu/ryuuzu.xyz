/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#190b28ff",
                secondary: "#70798cff",
                tertiary: "#B4B8C6ff",
                white: "#f8f7ffff",
            },
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
