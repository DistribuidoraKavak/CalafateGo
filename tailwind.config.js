/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            colors: {
                navy: '#0f172a',    // Color solicitado para fondo oscuro
                ice: '#0ea5e9',     // Un azul hielo vibrante (Sky 500)
                glacier: '#38bdf8', // Sky 400
            },
        },
    },
    plugins: [],
}
