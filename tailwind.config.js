/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {
        colors: {
          'primary': '#FF9800',
          'secondary': '#1E2234',
          'accent': '#232223',
          'text1': '#232223',
          'text2': '#ffffff',
          'text3': '#ADADAD',
          'text4': '#3D3D3D',
        }
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  }
  