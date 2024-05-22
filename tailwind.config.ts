import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors :{
        primary : "#F8992F",
        black1: "#000000",
        black2: "#434343",
        gray1:"#E9E9E9",
        gray2:"#666666",
        gray3:"#B5B5B5", 
        gray4:"#BABABA",  
        gray5:"#646464",
        gray6:"#6D6D6D",
        gray7:"#A0A0A0",
        gray8:"#747474",
        gray9:"#F9F9F9",
        gray10:"#F2F2F2",
        gray11:"#C9C9C9",





      },
    },
  },
  plugins: [],
};
export default config;
