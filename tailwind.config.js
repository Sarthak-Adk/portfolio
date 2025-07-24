// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        keyframes: {
            shimmer: {
                '0%': { backgroundPosition: '-100% 0' },
                '100%': { backgroundPosition: '200% 0' },
            },
        },
        animation: {
            shimmer: 'shimmer 1.5s linear infinite',
        },
    },
};
export const plugins = [];
