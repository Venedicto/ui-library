import { nextui } from "@nextui-org/react";
export default {
	purge: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
	],

	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	darkMode: "class",
	plugins: [nextui()],
};
