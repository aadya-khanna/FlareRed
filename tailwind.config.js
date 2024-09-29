/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white':'#F6FAFD',
        'grey':'#424242',
        'coral': "#EF7674",
        'cardinal': "#C42348",
        'navy': "#1c2c37", 
        'black': "000000",
        'grey': "33363d",
        'lgrey': "#EFF5FA", 
        'darkgrey': "#424242"
      } ,
      
      fontFamily: {
          "lato": ['Lato', 'sans-serif']
      },
  
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s infinite', 
      },
    },
  },  
  plugins: [],
}

