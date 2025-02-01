import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-main': 'var(--blue-main)',
        'orange-main': 'var(--orange-main)',
      },
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      fontFamily: {
        'montserrat': ['Montserrat Variable', 'sans-serif'],
        'inter': ['Inter Variable', 'sans-serif'],
      },
      flex: {
        '65': '0 0 65%',
        '75': '0 0 75%',
      }
    },
  },
  plugins: [],
}

export default config
