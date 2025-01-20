/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial-light":
          "radial-gradient(600px at 1250px 98px, rgba(255, 255, 255, 0.15), transparent 80%)",
        "custom-radial-dark":
          "radial-gradient(600px at 1250px 98px, rgba(0, 0, 0, 0.15), transparent 80%)",
      },
    },
  },
  plugins: [],
};
