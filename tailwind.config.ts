import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-subtle': 'var(--gradient-subtle)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'elegant': 'var(--shadow-elegant)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "pulse": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.5"
          }
        },
        "slide-right": {
          "0%": {
            transform: "translateX(-100%)"
          },
          "100%": {
            transform: "translateX(100%)"
          }
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)"
          },
          "100%": {
            transform: "translateY(100%)"
          }
        },
        "fill-sequential-1": {
          "0%, 12.5%": {
            transform: "translateX(-100%)"
          },
          "25%": {
            transform: "translateX(0%)"
          },
          "87.5%, 100%": {
            transform: "translateX(0%)"
          }
        },
        "fill-sequential-2": {
          "0%, 37.5%": {
            transform: "translateX(-100%)"
          },
          "50%": {
            transform: "translateX(0%)"
          },
          "87.5%, 100%": {
            transform: "translateX(0%)"
          }
        },
        "fill-sequential-3": {
          "0%, 62.5%": {
            transform: "translateX(-100%)"
          },
          "75%": {
            transform: "translateX(0%)"
          },
          "87.5%, 100%": {
            transform: "translateX(0%)"
          }
        },
        "fill-sequential-vertical-1": {
          "0%, 12.5%": {
            transform: "translateY(-100%)"
          },
          "25%": {
            transform: "translateY(0%)"
          },
          "87.5%, 100%": {
            transform: "translateY(0%)"
          }
        },
        "fill-sequential-vertical-2": {
          "0%, 37.5%": {
            transform: "translateY(-100%)"
          },
          "50%": {
            transform: "translateY(0%)"
          },
          "87.5%, 100%": {
            transform: "translateY(0%)"
          }
        },
        "fill-sequential-vertical-3": {
          "0%, 62.5%": {
            transform: "translateY(-100%)"
          },
          "75%": {
            transform: "translateY(0%)"
          },
          "87.5%, 100%": {
            transform: "translateY(0%)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "pulse": "pulse 3s ease-in-out infinite",
        "slide-right": "slide-right 2s ease-in-out infinite",
        "slide-down": "slide-down 2s ease-in-out infinite",
        "fill-sequential-1": "fill-sequential-1 8s ease-in-out infinite",
        "fill-sequential-2": "fill-sequential-2 8s ease-in-out infinite",
        "fill-sequential-3": "fill-sequential-3 8s ease-in-out infinite",
        "fill-sequential-vertical-1": "fill-sequential-vertical-1 8s ease-in-out infinite",
        "fill-sequential-vertical-2": "fill-sequential-vertical-2 8s ease-in-out infinite",
        "fill-sequential-vertical-3": "fill-sequential-vertical-3 8s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out", 
        "slide-left": "slide-left 0.6s ease-out",
        "slide-right": "slide-right 0.6s ease-out",
        "zoom-in": "zoom-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
