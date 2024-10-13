/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    footer: "#919191",
                    header: "#8B8B8B",
                    headerLine: "#E9E9E9",
                },
            },
            extend: {
                fontFamily: {
                    pretendard: ["var(--font-pretendard)"],
                },
            },
        },
    },
    plugins: [],
};
