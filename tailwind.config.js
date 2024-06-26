/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"]
      },
      colors() {
        return {
          btnHeader: {
            blue: "rgb(0, 71, 187)"
          },
          whitePrimary: 'rgb(225, 227, 230)',
          darkGray: 'rgb(35, 35, 36)',
          borderGray: 'rgb(54, 55, 56)',
          mediumGray: 'rgb(118, 120, 122)',
          lightGray: 'rgb(176, 177, 182)',
          borderBlue: 'rgb(0, 71, 187)',
        };
      },
      screens: {
        'mobile': '320px',
      },
      fontSize: {
        btnHeader: ["14px", { lineHeight: "20px", fontWeight: "600" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.037em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "1.3333", letterSpacing: "-0.037em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.037em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
