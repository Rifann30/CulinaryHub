module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkbrown: "var(--color-dark-brown)",
        cream: "var(--color-cream)",
        gold: "var(--color-gold)",
        amber: "var(--color-amber)"
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
