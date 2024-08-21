/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // did myself searched so much for these things on google 
      animation: {
      //   // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 1',
        'side': 'linear cubic-bezier(0.25,0.1,0.25,1)',
      'fade-in' : 'fade-in 1 ease-in 3s'
      },
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
          }
      }
    },

    fontFamily:{
      'cursive': ['Cedarville Cursive','cursive'],
      'dancingCursive':["Dancing Script",'cursive' ],
      'Inconsolata':["Inconsolata", 'monospace'],
      'Bodoni+Moda+SC':["Bodoni Moda SC", 'serif'],
      'Acme':["Acme", 'sans-serif']
    }
  },
  plugins: [],
}

