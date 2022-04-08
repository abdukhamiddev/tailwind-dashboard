module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			translate: ["responsive", "group-hover", "hover", "focus"],
			padding: {
				"3/5": "60%",
			},
		},
	},
	plugins: [],
};
