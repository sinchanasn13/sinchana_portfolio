export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",     // Dark navy blue
        secondary: "#112240",   // Slightly lighter navy
        accent: "#64FFDA",      // Teal accent
        highlight: "#FFB400",   // Gold highlight
        textLight: "#CCD6F6",   // Soft light blue for text
      },
    },
  },
  plugins: [],
}
