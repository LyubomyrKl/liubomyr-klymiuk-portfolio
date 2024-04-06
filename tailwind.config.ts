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
            '50%': { transform: 'translateX(10%)'},
            '100%': { transform: 'translateX(0)'},
        },
        'shift-left': {
          '0%': { transform: 'translateX(10%)'},
          '100%': { transform: 'translateX(0)'},

        },
        'shift-down': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10%)'},
            '100%': { transform: 'translateY(0)'},
        },

        'shift-up': {
            '0%': { transform: 'translateY(10%)'},
            '100%': { transform: 'translateY(0)'},
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
                height: '100vh'
            },
        },

        'popup-route-out': {
            '0%': {
                top: '0',
                height: '100vh',
            },
            '100%': {
                top: '0',
                height: '0',
            },
        },

        'timer-blink': {
            '50%': { opacity: '0' },
            // '50%': { opacity: '1' },
        },

        'expand-vertical-line': {
            '0%': { height: '0' },
            '100%': { height: '100%' },
        },


        'expand-horizontal-line': {
            '0%': { width: '0' },
            '100%': { width: '100%' },
        }

      },

      animation: {
        'scale-down': 'scale-down .25s ease-in-out normal forwards',
        'scale-up': 'scale-up .25s ease-in-out normal forwards',

        'shift-right': 'shift-right 1s linear normal infinite',
        'shift-left': 'shift-left .35s linear normal forwards',

        'shift-down': 'shift-down 1s linear normal infinite ',
        'shift-up': 'shift-up .35s linear normal forwards',

        'expand-menu': 'expand .45s ease-in normal forwards',
        'shrink-menu': 'shrink .45s ease-in normal forwards',

        'fadeIn': 'fadeIn .35s linear normal forwards',
        'fadeOut': 'fadeOut .35s linear normal forwards',

        'popup-route-in': 'popup-route-in 1s cubic-bezier(.66,.61,.28,.98) normal forwards',
        'popup-route-out': 'popup-route-out 1s cubic-bezier(.66,.61,.28,.98)  normal forwards',

        'timer-blink': 'timer-blink 1s  infinite',

        'expand-vertical-line-type-1': 'expand-vertical-line 3s cubic-bezier(.9,.1,.63,.66) normal forwards',
        'expand-vertical-line-type-2': 'expand-vertical-line 2.4s cubic-bezier(.44,.77,.78,.3) normal forwards',
        'expand-vertical-line-type-3': 'expand-vertical-line 4.5s cubic-bezier(.44,.77,0,.76) normal forwards',

        'expand-horizontal-line-type-1': 'expand-horizontal-line 3.8s cubic-bezier(.9,.1,.63,.66) normal forwards',
        'expand-horizontal-line-type-2': 'expand-horizontal-line 2.7s cubic-bezier(.44,.77,.78,.3) normal forwards',
        'expand-horizontal-line-type-3': 'expand-horizontal-line 6s cubic-bezier(.52,.19,.39,.64) normal forwards',
        'expand-horizontal-line-type-4': 'expand-horizontal-line 5s cubic-bezier(.76,.15,.11,.21) normal forwards',
      },

      colors: {
        'app-black': '#222222',
        'app-white': '#ffffff',

        'app-text-gray': '#5c5c5c',

        'app-border': '#cecece',
        'app-lightgray': '#838383',
        'app-gray': '#757575',
        'app-darkgray': '#4e4e4e',
        'app-background': 'rgba(239,234,230,0.87)',
      },
      backgroundImage: {

        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
      function ({ addUtilities }:any) {
          const newUtilities = {
              '.animation-delay-1000': {
                  'animation-delay': '1000ms',
              },
              '.animation-delay-1500': {
                  'animation-delay': '1500ms',
              },
              '.animation-delay-2000': {
                  'animation-delay': '2000ms',
              },
              '.animation-delay-2500': {
                  'animation-delay': '2500ms',
              },
              '.animation-delay-3000': {
                  'animation-delay': '3000ms',
              }
              // Add more delay classes as needed
          };

          addUtilities(newUtilities, ['responsive', 'hover']);
      },
  ],
};
export default config;
