/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'brown': '#805B43',
        'babyblue': '#B9EAFF',
        'bluestone': '#97C5D9',
        'naval': '#496F80',
        'peachy': '#FFD3BA',
        'greystone': '#A0CADB',
        'bluestone2': '#8FBAD3',
        'bluestone3': '#8bb3ca',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      avant: ['Inknut Antiqua', 'serif'],
      decor: ['Fraunces', 'serif'],
      serif: ['Cormorant Garamond', 'serif'],
    },
    fontWeight: {
      sanslight: 200,
      sansnormal: 400,
      sanssemi: 600,
      sansbold: 800,
      seriflight: 300,
      serifnormal: 400,
      serifmedium: 500,
      serifsemi: 600,
      serifbold: 700,
      decorlight: 300,
      decormedium: 500,
      decorbold: 900,
    },
  },
  plugins: [],
}



