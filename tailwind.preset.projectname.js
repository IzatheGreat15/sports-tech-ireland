const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		// Typography
		fontFamily: {
			'sans': ['Inter', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {

			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	]
}
