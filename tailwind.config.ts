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
        // Brand colors
        brand: {
          burgundy: {
            DEFAULT: '#340C0D',
            hover: '#4A1718',
            active: '#5A1B1D',
          },
          ivory: '#DCCCC5',
        },
        // Neutrals
        neutral: {
          '900': '#0F1214',
          '700': '#2E2C2A',
          '500': '#818183',
          '300': '#BDBAB1',
          '50': '#F5F2EE',
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
