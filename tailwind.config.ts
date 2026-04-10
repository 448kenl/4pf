import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        foreground: '#f2efe9',
        muted: '#1a1a1a',
        bone: '#d7d0c5',
        accent: '#d95b36'
      }
    }
  },
  plugins: []
};

export default config;
