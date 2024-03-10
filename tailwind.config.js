/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#12EE33',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['enabled', 'disabled'],
    },
  },
  plugins: [],
  // Add the new CSS classes and animations here
  css: {
    // This section allows adding custom CSS without Tailwind directives
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // Adjust path to your CSS files
    ],
    // Add your cosmos background styles here
    plugins: {
      after: [
        function ({ addComponents, addUtilities }) {
          addComponents([
            '.cosmos', {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            },
            '.star': {
              position: 'absolute',
              borderRadius: '50%',
              animation: 'twinkle 2s infinite linear',
            },
            // Add styles for each star element here (refer to previous code)
          ]);

          // Add animation styles
          addUtilities({
            '.star:nth-child(1)': {
              width: '2px',
              height: '2px',
              background: '#fff',
              animationDelay: '0s',
              left: '20%',
              top: '30%',
            },
            // Add styles for other star elements here (refer to previous code)
          });

          // Add the twinkle animation
          addUtilities({
            '@keyframes twinkle': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0.3 },
              '100%': { opacity: 1 },
            },
          });
        },
      ],
    },
  },
};
