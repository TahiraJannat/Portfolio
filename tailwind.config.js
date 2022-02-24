module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/public/logo1.png')",
        "hero-banner":
          "linear-gradient(to right bottom,  rgba(0, 0, 0, 0.93), rgba(19, 15, 64, 0.93)), url('../public/pexels-photo-248515.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
