/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    fontFamily: {
        'poppins': ['"Poppins", sans-serif'],
        'opensans': ['"Open Sans", sans-serif'],
    },
    extend: {
      minHeight: {
        'customModalMinHeight': 'calc(100% - 3.5rem)',
      },
      screens: {
        'xxs': '360px',  // Custom extra-extra small breakpoint
        'xs': '480px',   // Custom extra small breakpoint
        'sm': '640px',   // Small breakpoint (default)
        'csm': '576px',   // Custom Small breakpoint 
        'md': '768px',   // Medium breakpoint (default)
        'lg': '1024px',  // Large breakpoint (default)
        'xl': '1280px',  // Extra large breakpoint (default)
        '2xl': '1536px', // 2X large breakpoint (default)
        'clg': '992px', // Custom 2X large breakpoint
        'cxl': '1200px', // Custom 2X large breakpoint
        'c2xl': '1400px', // Custom extra large breakpoint
        'c3xl': '1600px', // Custom extra-extra large breakpoint
        'c4xl': '1680px', // Custom extra-extra large breakpoint
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-toggle': '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
        'custom-main-intro': '10px 10px 50px rgba(0, 0, 0, 0.1)',
        'custom-testimonial': '0 10px 30px rgba(176, 18, 6, 0.1)',
        'custom_freelancer_hero': '0px 0px 60px 5px rgba(2, 24, 93, 0.1)',
      },
      colors: {
        'main-dark': '#615978',
        'main-light': '#f5f5f5',
        'main-primary': '#fd562a',
        'main-secondary': '#bf2902',
        'main-dark-two': '#b0aac0',
        'main-light-two': '#948daa',
        'dark': '#222222',
      },
      keyframes: {
        animUpDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0)' },
        },
        animMove: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(0)' },
        },
        animZoom: {
          '0%': { transform: 'scale(0.2)' },
          '50%': { transform: 'scale(0.7)' },
          '100%': { transform: 'scale(0.2)' },
        },
        glitch: {
          '0%, 100%': { 
            transform: 'translate(-10px, -10px)',
            clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)'
          },
          '10%': { 
            transform: 'translate(10px, -10px)', 
            clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)'
          },
          '20%': { 
            transform: 'translate(-10px, 10px)',
            clipPath: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)'
          },
          '40%': { 
            transform: 'translate(10px, -10px)', 
            clipPath: '0 60%, 100% 60%, 100% 80%, 0 80%)'
          },
          '60%': { 
            transform: 'translate(-10px, 10px)',
            clipPath: 'polygon(0 80%, 100% 80%, 100% 80%, 0 80%)'
          },
          '80%': { 
            transform: 'translate(10px, -10px)', 
            clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)'
          },
        },
      },
      animation: {
        animUpDown: 'animUpDown 5s infinite',
        animMove: 'animMove 5s infinite',
        animZoom: 'animZoom 5s infinite',
        animZoom2: 'animZoom 3s infinite',
        glitch: 'glitch 2s infinite',
        glitch2: 'glitch 3s infinite',
        glitch3: 'glitch 4s infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
