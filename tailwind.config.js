/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'border-flow': 'border-flow 3s linear infinite',
        'gradient-flow': 'gradient-flow 3s linear infinite',
        'underline': 'underlineAnimation 2s ease-out infinite', // Added underline animation
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        'border-flow': {
          '0%, 100%': { borderColor: '#A330E5' },
          '33%': { borderColor: '#ffffff' },
          '66%': { borderColor: '#A330E5' },
        },
        'gradient-flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        // Define keyframes for the underline animation
        'underlineAnimation': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },
        'glowPulse': {
          '0%, 100%': { boxShadow: '0 0 5px #A330E5' },
          '50%': { boxShadow: '0 0 15px #A330E5, 0 0 25px #A330E5' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

