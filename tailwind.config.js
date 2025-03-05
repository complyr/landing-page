/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"index.js",
		"index.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#192a45",
				secondary: "#b93e30",
			}
		},
	},
	plugins: [],
}

