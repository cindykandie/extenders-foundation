/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#E8E7E8",
      },
      backgroundImage: {
        'contact-background': "url('/IMG_7443.jpg')",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.bg-custom': {
          backgroundImage: `url('/assets/childmom.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'auto',
          height:'70vh',
          
        },
      })
    },
    require('@tailwindcss/forms'),
  ],
}
