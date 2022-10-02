/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        nav: '#EFEFEF',
        bg:'#fff',
        form: '#F5F5F5',
        tblhead: '#E0E0E0',
        title: '#515151',
        divider: '#CCCCCC',
        btn: '#5CAC21',
        btnh: '#65BF24',
      },
      boxShadow: {
        box: '0px 2px 2px rgba(0, 0, 0, 0.4)',
        tooltip: '1px 1px 2px rgba(0, 0, 0, 0.26)',
      },
      fontSize: {
        pvsm: '13px'
      }
    },
  },
  plugins: [],
}
