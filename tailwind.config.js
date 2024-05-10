/** @type {import('tailwindcss').Config} */
var require;
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    //require("tailwind-scrollbar"),
    // require("@tailwindcss/line-clamp"),
  ],
  fontFamily: {
    oswald: ['Oswald', 'sans-serif'],
    dmsans: ['DM Sans', 'sans-serif'],
    cto : ["Cantora One", "san-serif"]
  }
};
