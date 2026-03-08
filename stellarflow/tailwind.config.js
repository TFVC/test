/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Caveat"', '"Ma Shan Zheng"', 'cursive', 'sans-serif'],
        hand: ['"Caveat"', '"Ma Shan Zheng"', 'cursive'],
        brush: ['"Ma Shan Zheng"', 'cursive'],
      },
      colors: {
        brand: {
          dark: "#ffffff", // Paper White
          paper: "#fdfbf7", // Warm Paper
          ink: "#2c2c2c", // Ink Black
          primary: "#2c2c2c", // Ink Black (Primary)
          secondary: "#4a4a4a", // Charcoal
          accent: "#ef4444", // Red stamp color
          gold: "#f59e0b", // Gold (maybe for stars)
          light: "#1a1a1a", // Dark text
        }
      },
      backgroundImage: {
        'paper-texture': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'sketch': '2px 2px 0px 0px #2c2c2c',
        'sketch-lg': '4px 4px 0px 0px #2c2c2c',
        'sketch-xl': '6px 6px 0px 0px #2c2c2c',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
