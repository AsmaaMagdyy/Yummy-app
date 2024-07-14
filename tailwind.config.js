/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center:true,
        padding: '2rem',
      },
      boxShadow: {
        'green': '0 0 0 0.25rem rgba(60, 153, 110,0.5)',
        'danger':'0 0 0 0.25rem rgba(225,83,97,0.5)',
        'blue':'0 0 0 .25rem rgba(13, 110, 253, 0.25)',
      }
    },
  },
  plugins: [
    
  ],
}

