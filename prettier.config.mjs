/** @type {import("prettier").Config} */
const config = {
    singleQuote: false,
    jsxSingleQuote: false,
    tabWidth: 2,
    useTabs: false,
    endOfLine: "auto",
    semi: true,
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindConfig: "./tailwind.config.ts",
};

export default config;
