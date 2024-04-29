/** @type {import('tailwindcss').Config} */

import defaultColors from "tailwindcss/colors";

const colors = {
  "planetary-blue": "#334EAC",
  "venus-blue": "#BAD6EB",
  "universe-blue": "#7096D1",
  "meteor-white": "#F7F2EB",
  "milky-way-white": "#FFF9F0",
  "galaxy-blue": "#081F5C",
  "sky-blue": "#D0E3FF",
};

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  fontSize: {
    sm: "12px",
    base: '14px',
    lg: '16px',
    xl: '18px',
    '1.5xl': '19.5px',
    '2xl': '21px',
    '3xl': '24px',
    '4xl': '27px',
    '5xl': '30px'
  },
  extend: {
    backGroundImage: {},
    fontFamily: {
      poppins: ['"Poppins", sans-serif'],
      inter: ['"Inter", sans-serif'],
      raleway: ['"Raleway", sans-serif']
    },
    colors: {
      "planetary-blue": "#334EAC",
      "venus-blue": "#BAD6EB",
      "universe-blue": "#7096D1",
      "meteor-white": "#F7F2EB",
      "milky-way-white": "#FFF9F0",
      "galaxy-blue": "#081F5C",
      "sky-blue": "#D0E3FF",
      "prominent-blue": "#2B77A4",
      "pearl-sugar": "#F4F1EB",
      "sentimental-beige": "#E2D8C6",
      "chestnut-red": "#723544",
      ...defaultColors
    }
  }
};

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
