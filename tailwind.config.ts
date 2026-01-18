/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"), // Add this line, // Add this line
    ],
    // Optional: Configure daisyUI themes or other options here
    daisyui: {
        themes: ["light", "dark", "cupcake"], // Example themes
    },
};
