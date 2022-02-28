module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "Open Sans Condensed"],
      serif: ["ui-serif", "Georgia"],
    },
    extend: {
      backgroundImage: {
        logo: "url('/public/logo1.png')",
        "hero-banner":
          "linear-gradient(to right bottom,  rgba(0, 0, 0, 0.93), rgba(19, 15, 64, 0.93)), url('../public/pexels-photo-248515.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
        "user-image": "url('/public/tahira_jannat.png')",
      },
      spacing: {
        260: "260px",
      },
      fontSize: {
        base_lg: "17px",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
