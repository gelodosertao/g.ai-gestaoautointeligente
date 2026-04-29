/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./services/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gai-navy': '#0D1B2E',
                'gai-teal': '#3DBFB0',
                'gai-teal-light': '#6ED4C8',
                'gai-mint': '#A8E6DF',
                'gai-tech': '#3DBFB0', // Teal - G.AI Brand Primary
            }
        },
    },
    plugins: [],
}
