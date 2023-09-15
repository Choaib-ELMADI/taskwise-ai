/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			xs: "360px",
			sm: "480px",
			md: "600px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			background: "var(--background)",
			text: "var(--text)",

			secondary: "var(--secondary)",
			tertiary: "var(--tertiary)",
			hovery: "var(--hovery)",

			brand: "var(--brand)",

			custom_01: "var(--custom_01)",
			custom_02: "var(--custom_02)",
			custom_03: "var(--custom_03)",
		},
		fontSize: {
			large: "var(--large)",
			medium: "var(--medium)",
			normal: "var(--normal)",
			small: "var(--small)",
			tiny: "var(--tiny)",
		},
		fontFamily: {
			arvo: ["Arvo"],
			kanit: ["Kanit"],
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		extend: {},
	},
	plugins: [],
};
