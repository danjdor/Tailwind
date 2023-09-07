/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw': '(min-aspect-ratio: 13/20)'},
      },
      height:{
        'mainheight':'90vh',
        'imageheight': '450px',
        'card-h': '500px'
      },
      width:{
        'card-w': '50vw',
        'card-maxw': '650px',
        'card-imagew': '40vw',
        'card-imagemw': '280px'

      },
      colors:{
        'primary':'#faead1;',
         'primary1':'#59833a;',
         'secondary':'#faf1e0;',
         'card-color2':'#e4c451',
         '#card-color3': '#f4b594'
      },
      backgroundImage:{
        'pack-train': "url('../dist/img/metta2.jpg')",
        'pack-trainn': "url('../dist/img/metta11.jpg')",
        'pack-trainm': "url('../dist/img/metta3.jpg')"
      },
      skew:{
        'bend':'-20deg'
      },
      fontSize:{
        'fs': '8px'
      },

      keyframes:{
        'open-menu': {
          '0%': {transform:'scaleY(0)'},
          '80%': {transform:'scaleY(1.2)'},
          '100%': {transform:'scaleY(1)'},
        }, 
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

