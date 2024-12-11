/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace']
      }
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  darkMode: ['class', '[data-theme="dark"]'],
  daisyui: {
    themes: ['corporate', 'dark', 'cyberpunk']
  }
}
