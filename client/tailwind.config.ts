import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'dark-gray': '#333333',
        'button-blue': '#3498db',
        'dark-input': '#242424',
        'light-gray': '#FFFFFF',
        'link-green': '#1DB954',
        'spotify-green': {
          500: '#1DB954',
        },
        'spotify-gray': {
          300: '#B3B3B3',
        },
      },
      textColor: {
        'link-green': '#1DB954',
        'light-gray': '#FFFFFF',
        'spotify-green': {
          500: '#1DB954',
        },
        'spotify-gray': {
          300: '#B3B3B3',
        },
      },
      colors: {
        // Primary Brand Color
        green: {
          500: '#1DB954', // Spotify's Green
        },
        // Background Color
        black: {
          900: '#191414', // Spotify's Black
        },
        // Text Color
        white: {
          100: '#FFFFFF', // Spotify's White
        },
        'spotify-green': {
          500: '#1DB954',
        },
        'spotify-gray': {
          300: '#B3B3B3',
        },
      },
    },
  },
  plugins: [],
}
export default config
