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
				// Enhanced Portfolio Colors
				'dark-bg': 'hsl(var(--dark-bg))',
				'green-primary': 'hsl(var(--green-primary))',
				'green-secondary': 'hsl(var(--green-secondary))',
				'green-accent': 'hsl(var(--green-accent))',
				'beam-green': 'hsl(var(--beam-green))',
				'cyber-blue': 'hsl(var(--cyber-blue))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'plasma-purple': 'hsl(var(--plasma-purple))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'beam-1': {
					'0%, 100%': { 
						opacity: '0.2',
						transform: 'translateX(-100px) rotate(45deg)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'translateX(100px) rotate(45deg)'
					}
				},
				'beam-2': {
					'0%, 100%': { 
						opacity: '0.1',
						transform: 'translateX(100px) rotate(-45deg)'
					},
					'50%': { 
						opacity: '0.6',
						transform: 'translateX(-100px) rotate(-45deg)'
					}
				},
				'beam-3': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'translateY(-50px) rotate(15deg)'
					},
					'50%': { 
						opacity: '0.9',
						transform: 'translateY(50px) rotate(15deg)'
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
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-up': {
					'0%': { 
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.6'
					},
					'33%': { 
						transform: 'translateY(-8px) rotate(2deg)',
						opacity: '0.8'
					},
					'66%': { 
						transform: 'translateY(-4px) rotate(-1deg)',
						opacity: '0.9'
					}
				},
				'float-gentle': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg)',
						opacity: '1'
					},
					'25%': { 
						transform: 'translateY(-4px) translateX(2px) rotate(1deg)',
						opacity: '0.95'
					},
					'50%': { 
						transform: 'translateY(-8px) translateX(0px) rotate(0deg)',
						opacity: '1'
					},
					'75%': { 
						transform: 'translateY(-4px) translateX(-2px) rotate(-1deg)',
						opacity: '0.95'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--green-accent) / 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--green-accent) / 0.8)',
						transform: 'scale(1.02)'
					}
				},
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'beam-1': 'beam-1 12s ease-in-out infinite',
				'beam-2': 'beam-2 15s ease-in-out infinite 4s',
				'beam-3': 'beam-3 18s ease-in-out infinite 8s',
				'fade-up': 'fade-up 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-up': 'scale-up 0.5s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'float-gentle': 'float-gentle 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'neural-pulse': 'neural-pulse 2s ease-in-out infinite'
			},
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
