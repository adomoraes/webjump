/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				red: {
					500: "#CB0D1F",
					600: "#E50019",
				},
				blue: {
					500: "#00A8A9",
					600: "#019696",
				},
			},
		},
	},
	plugins: [],
}
