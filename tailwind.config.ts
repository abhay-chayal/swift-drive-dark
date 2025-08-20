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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				}
			},
			backgroundImage: {
				'gradient-premium': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'glass': 'var(--shadow-glass)',
				'elevation': 'var(--shadow-elevation)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'premium-drive': {
					'0%': { 
						transform: 'translateX(-50px) rotateY(-5deg) scale(0.95)',
						filter: 'brightness(0.8)'
					},
					'50%': { 
						transform: 'translateX(0px) rotateY(0deg) scale(1)',
						filter: 'brightness(1.1)'
					},
					'100%': { 
						transform: 'translateX(50px) rotateY(5deg) scale(0.95)',
						filter: 'brightness(0.8)'
					}
				},
				'luxury-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateZ(-1deg)',
						boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
					},
					'50%': { 
						transform: 'translateY(-25px) rotateZ(1deg)',
						boxShadow: '0 25px 50px rgba(0, 212, 255, 0.5)'
					}
				},
				'cred-slide': {
					'0%': { 
						transform: 'translateX(100%) scale(0.8)', 
						opacity: '0',
						filter: 'blur(10px)'
					},
					'100%': { 
						transform: 'translateX(0) scale(1)', 
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				'premium-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--accent) / 0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 50px hsl(var(--primary) / 0.8), 0 0 100px hsl(var(--accent) / 0.4)' 
					}
				},
				'scale-luxury': {
					'0%': { 
						transform: 'scale(0.9) rotateY(-10deg)', 
						opacity: '0',
						filter: 'blur(5px)'
					},
					'100%': { 
						transform: 'scale(1) rotateY(0deg)', 
						opacity: '1',
						filter: 'blur(0px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'premium-drive': 'premium-drive 4s ease-in-out infinite',
				'luxury-float': 'luxury-float 6s ease-in-out infinite',
				'cred-slide': 'cred-slide 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
				'premium-glow': 'premium-glow 3s infinite',
				'scale-luxury': 'scale-luxury 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
