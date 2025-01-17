/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        headerContainer: "1406px",
      },
      fontFamily:{
        dm: ['DM Sans'],

      },

      colors: {
        menuText: '#767676',
        menuTextHover: '#262626',
        categoryColor: '#F5F5F3',
        categoryBorderColor: '#767676',
        placeHolderColor:'#C4C4C4',
        productTextColor:'#767676',
        productBg: '#D8D8D8',
        arrowBg: '#979797',
        footerBg: '#F5F5F3',
        footerTextColor: '#6D6D6D',
        dropDownbg: '#023020',
        borderColor:'#F0F0F0',
        cartProductColor:'#F5F7F7',
      },
      width:
      {
        logoW:'40%',
        menuW:'60%',
      },
      backgroundImage:
      {
bannerImage: "url('/src/assets/Intro.png')",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "cupcake"], // Include only the themes you want
  },
}

