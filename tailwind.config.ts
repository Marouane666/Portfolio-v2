import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '430px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1537px'
    },
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        'n4p': '-0.4em', // -4% equivalent (since 1em = 100%)
      },
      lineHeight: {
        '96p': '0.96',    // 96% line height (equivalent to -4%)
        'n4p': '0.96',    // Alternative name for -4%
      },
    },
  },
  plugins: [],
} satisfies Config;
