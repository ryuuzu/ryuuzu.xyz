// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Options} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-tailwindcss',
    ],
}

module.exports = config
