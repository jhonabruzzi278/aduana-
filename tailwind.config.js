// tailwind.config.js
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  safelist: [
    'bg-green-600',
    'bg-red-600',
    'bg-blue-600',
    'animate-fade-in-out'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
