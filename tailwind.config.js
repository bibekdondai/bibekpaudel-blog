export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx}",
    "./src/pages/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "hsl(45, 99%, 55%)",
          400: "hsl(45, 99%, 48%)"
        },
        gray: {
          500: "hsl(22, 24%, 32%)",
          600: "hsl(23, 16%, 40%)"
        },
        white: {
          DEFAULT: "hsl(34, 100%, 96%)"
        },
        body: {
          DEFAULT: "hsl(34, 100%, 92%)",
          alt: "hsl(34, 100%, 88%)"
        },
        text: {
          light: "hsl(23, 16%, 40%)"
        },
        container: "hsl(34, 100%, 96%)"
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        display: ["Aclonica", "sans-serif"]
      },
      fontSize: {
        'biggest': '3rem',
        'h1': '1.5rem',
        'h2': '1.25rem',
        'h3': '1rem',
        'base': '.938rem',
        'sm': '.813rem'
      },
      zIndex: {
        tooltip: '10',
        fixed: '100'
      },
      dropShadow: {
        small: "0 4px 16px hsla(22, 100%, 8%, .2)",
        big: "0 8px 24px hsla(22, 100%, 8%, .2)"
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.5, 0, 0, 1)"
      },
      scrollMarginTop: {
        24: "6rem"
      }
    },
  },
  plugins: [],
}
