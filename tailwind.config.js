/** @type {import('tailwindcss').Config} */

const colors = require("./node_modules/tailwindcss");

module.exports = {
   content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
   theme: {
      colors: {
         transparent: "transparent",
         current: "currentColor",
         black: colors.black,
         white: colors.white,
         gray: colors.gray,
         emerald: colors.emerald,
         indigo: colors.indigo,
         yellow: colors.yellow,
         orange: colors.orange,
      },
      extend: {},
   },
   plugins: [],
};
