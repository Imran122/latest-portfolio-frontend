/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_colour: "var(--primary-colour)",
        secondary_colour: "var(--secondary-colour)",
        custom_button_color: "var(--custom_button_color)",
        text_colour: "var(--text-colour)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      display: ["group-hover"],
      screens: {
        "cs-screen": [{ min: "1020px", max: "1420px" }],
        "cs-screen-second": [{ min: "1421px", max: "1680px" }],
      },
      fontFamily: {
        custom_intro_font: "var(--custom-intro-font)",
        custom_name_font: "var(--custom-name-font)",
        custom_subtitle_font: "var(--custom-subtitle-font)",
      },
    },
    animation: {
      "spin-slow": "spin 6s linear infinite",
    },
  },
  plugins: [
    // other plugins
    require("tailwindcss-filters"),
  ],
};
