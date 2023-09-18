/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			xs: "380px",
			sm: "480px",
			md: "600px",
			mn: "725px",
			dm: "901px",
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
			orange: "var(--orange)",
			red: "var(--red)",
			purple: "var(--purple)",

			custom_01: "var(--custom_01)",
			custom_02: "var(--custom_02)",
			custom_03: "var(--custom_03)",
		},
		fontSize: {
			xlarge: "var(--xlarge)",
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
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
