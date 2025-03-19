
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				splyt: {
					50: '#f0f6ff',
					100: '#e0edff',
					200: '#c0d9ff',
					300: '#91bcff',
					400: '#5d97ff',
					500: '#3873ff',
					600: '#1f52ff',
					700: '#1140f2',
					800: '#1434d6',
					900: '#1730af',
					950: '#101f69',
				},
				frost: {
					50: '#f0f9ff',
					100: '#e0f3ff',
					200: '#b9e7ff',
					300: '#7cd4ff',
					400: '#37bfff',
					500: '#0ca6ff',
					600: '#008aee',
					700: '#006ec0',
					800: '#005c9e',
					900: '#074e82',
					950: '#05304f',
				},
				midnight: {
					50: '#f6f7fa',
					100: '#ebeef3',
					200: '#d3dae5',
					300: '#acbad0',
					400: '#8094b5',
					500: '#5f779c',
					600: '#4a6081',
					700: '#3e4e69',
					800: '#354258',
					900: '#20283b',
					950: '#171c29',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'shimmer': {
					'0%': { 
						'background-position': '-500px 0'
					},
					'100%': { 
						'background-position': '500px 0'
					}
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-down': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'shimmer': 'shimmer 2s infinite',
				'scale-up': 'scale-up 0.4s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-down': 'fade-down 0.6s ease-out',
				'fade-up': 'fade-up 0.6s ease-out'
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'glass-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
				'glass-xl': '0 15px 50px rgba(0, 0, 0, 0.05)',
				'highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
				'highlight-strong': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
