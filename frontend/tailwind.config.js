/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#5599ff",
        blueColor: "#62bfff",
        greenColor: "#89f78e",
        irisBlueColor: "#70b2fc",
        headingColor: "#181A1E",
        textColor: "#4E544F",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      }
    },
  },
  plugins: [],
}

