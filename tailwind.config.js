/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-gold': '#DAA520', // Goldenrod / Majestic Gold
                'brand-green': '#10B981', // Emerald Green
                'brand-dark': '#0F172A',  // Slate 900
            },
            boxShadow: {
                'neon-green': '0 0 10px #10B981, 0 0 20px #10B981',
                'neon-gold': '0 0 10px #DAA520, 0 0 20px #DAA520',
            },
        },
    },
    plugins: [],
}
