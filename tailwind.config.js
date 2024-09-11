/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateWords: {
          '0%, 20%': { transform: 'translateY(0)' },
          '25%, 45%': { transform: 'translateY(-100%)' },
          '50%, 70%': { transform: 'translateY(-200%)' },
          '75%, 95%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(0)' }, // العودة بسرعة إلى الكلمة الأولى
        },
      },
      animation: {
        'rotate-words': 'rotateWords 8s infinite', // مدة الأنيميشن 8 ثوانٍ
      },
    },
  },
  plugins: [],
};
