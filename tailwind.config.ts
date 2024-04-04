import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scale-down': {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(.97)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.97)' },
          '100%': { transform: 'scale(1)' },
        },

        'shift-right': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(10%)'},
        },
        'shift-left': {
          '0%': { transform: 'translateX(10%)'},
          '100%': { transform: 'translateX(0)'},

        },

        'expand': {
            '0%': { width: '80%', height: '60px' },
            '50%': { width: '100%', height: '60px' },
            '100%': { width: '100%', height: '270px'},
        },

        'shrink': {
            '0%': { width: '100%', height: '270px' },
            '50%': { width: '100%', height: '60px' },
            '100%': { width: '80%', height: '60px' },
        },

        'fadeIn': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        },

        'fadeOut': {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
        },

        'popup-route-in': {
            '0%': {
                bottom: '0',
                height: '0',
            },
            '100%': {
                bottom: '0',
                height: '100%'
            },
        },

        'popup-route-out': {
            '0%': {
                top: '0',
                height: '100%',
            },
            '100%': {
                top: '0',
                height: '0',
            },
        }

      },

      animation: {
        'scale-down': 'scale-down .25s ease-in-out normal forwards',
        'scale-up': 'scale-up .25s ease-in-out normal forwards',

        'shift-right': 'shift-right .35s linear normal forwards',
        'shift-left': 'shift-left .35s linear normal forwards',

        'expand-menu': 'expand .35s ease-in normal forwards',
        'shrink-menu': 'shrink .45s ease-in normal forwards',

        'fadeIn': 'fadeIn .35s linear normal forwards',
        'fadeOut': 'fadeOut .35s linear normal forwards',

        'popup-route-in': 'popup-route-in 1s cubic-bezier(.66,.61,.28,.98) normal forwards',
        'popup-route-out': 'popup-route-out 1s cubic-bezier(.66,.61,.28,.98)  normal forwards'
      },

      colors: {
        'app-black': '#222222',
        'app-white': '#ffffff',

        'app-text-gray': '#5c5c5c',

        'app-lightgray': '#838383',
        'app-gray': '#757575',
        'app-darkgray': '#4e4e4e',
        'app-background': '#e4e4e4',
      },
      backgroundImage: {

        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
