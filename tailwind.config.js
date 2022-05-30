module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blueCustom: '#1f2227',
        redCustom :'#ece8e1',
        pinkCustom :'#ff4655',
        pinkCs : "#dc3d4be6",
        blackCustom :'#e2d5d5',
        button : "#fd4553"
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(250, 68, 84,1), rgba(220, 61, 75, 0.9)), url('././asset/Bg.jpg')",
          'linear': "linear-gradient(to right bottom, rgba(250, 68, 84,1), rgba(220, 61, 75, 0.9))"
        
      },
      fontFamily: {
        Roboto : ['Roboto Condensed', 'sans-serif']
      },
      height: {
        "200": "6700px",
        "100" : "400px"
      }
    },
  },
  plugins: [],
}