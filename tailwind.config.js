/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			display: ['group-hover'],
		},
	},
	daisyui: {
		themes: ['pastel', 'night'],
	},
	plugins: [require('daisyui')],
}
