import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        institucional: {
          azul: "#1e5f8c",
          azulClaro: "#5ba3d0",
          cielo: "#93c5fd",
          amarillo: "#eab308",
          amarilloClaro: "#fde047",
          verde: "#2e7d32",
          verdeClaro: "#4caf50",
          tierra: "#d4a574",
          scroll: "#c4a574",
          oscuro: "#1c1917",
        },
      },
    },
  },
  plugins: [],
};
export default config;
