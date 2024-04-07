import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {
        red: {
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc8c8",
          300: "#ffa1a1",
          400: "#fe6b6b",
          500: "#f63d3d",
          600: "#e52828", // main red
          700: "#c01515",
          800: "#9e1616",
          900: "#831919",
          950: "#480707",
        },
        yellow: {
          50: "#fcfde9",
          100: "#f7fbc6",
          200: "#f7f98f",
          300: "#f4f250",
          400: "#f0e52b", // main yellow
          500: "#dfcc13",
          600: "#c1a10d",
          700: "#9a750e",
          800: "#7f5d14",
          900: "#6d4c16",
          950: "#3f2809",
        },
        orange: {
          50: "#fef7ee",
          100: "#fcedd8",
          200: "#f8d7b0",
          300: "#f3bb7e",
          400: "#ed944a",
          500: "#e97c2f", // main orange
          600: "#da5e1c",
          700: "#b4481a",
          800: "#90391c",
          900: "#74311a",
          950: "#3f170b",
        },
      },
    },
  },
};
