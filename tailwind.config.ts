import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (warm, organic palette)
        brand: {
          burgundy: {
            DEFAULT: '#6B4042',    // Soft burgundy (from moodboard)
            hover: '#8B5456',
            active: '#4A2D2F',
            light: '#9D7678',
          },
          cream: '#F5EFE7',        // Warm cream background
          sand: '#E8DFD0',         // Sandy beige
          ivory: '#FAF7F2',        // Warm white
          taupe: '#C9B8A8',        // Warm taupe
          rose: '#B88B8D',         // Dusty rose
        },
        // Warm neutrals
        neutral: {
          '900': '#3D3532',
          '800': '#5C5350',
          '700': '#7A6F6A',
          '600': '#988D87',
          '500': '#B6ABA4',
          '400': '#CCC3BD',
          '300': '#DFD8D2',
          '200': '#EFEAE4',
          '100': '#F7F4F0',
          '50': '#FBFAF8',
          '0': '#FFFFFF',
        },
        // S-Shade swatches
        shade: {
          s01: '#1A1A1A', // Černá
          s02: '#3B2B20', // Tmavě hnědá
          s03: '#6A4B34', // Středně hnědá
          s04: '#8C6A4F', // Světle hnědá
          s05: '#B28A63', // Tmavá blond
          s06: '#D1B48C', // Přírodní blond
          s07: '#C2C0B5', // Popelavá blond
          s08: '#E8E6E2', // Platinová blond
          s09: '#E0C27A', // Medová blond
          s10: '#BFA684', // Bronde/Beige
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(61, 53, 50, 0.07), 0 10px 20px -2px rgba(61, 53, 50, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(61, 53, 50, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
