/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"dark-blue": "#181325",
				"light-blue": "#7cd3fd",
			},
		},
		spacing: {
			...defaultTheme.spacing,
			1: '1rem',
			1.25: '1.25rem',
			1.5: '1.5rem',
			2: '2rem',
			2.5: '3rem',
			3: '4rem'
		},
	},

	plugins: [],
}
