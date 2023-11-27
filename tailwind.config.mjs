import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '376px'
			},
			fontFamily: {
				sans: ["Roboto", ...defaultTheme.fontFamily.sans]
			},
			borderRadius: {
				'4xl': '3.6rem' // 36px
			},
			lineHeight: {
				'11': '3.5rem', // 56px
			},
			padding: {
				...defaultTheme.padding,
				'6': '1.6rem',
				'10': '2.4rem',
				'24': '6.4rem'
			},
			margin: {
				...defaultTheme.margin,
				'6': '1.6rem',
				'10': '2.4rem',
				'24': '6.4rem'
			}
		},
		fontSize: {
			heading: '4rem', // 40px
			base: '1.6rem', // 16px
			sm: '1.2rem', // 12px
		},
		colors: {
			navy: {
				dark: '#242742',
				pale: '#36384D'
			},
			vermellion: {
				default: '#FF6155',
				background: 'rgba(255, 97, 85, 0.15)'
			},
			white: '#FFFFFF',
		},
		boxShadow: {
			'default': '0px 16px 32px 0px rgba(255, 97, 85, 0.50)',
		},
	},
	plugins: [],
}
