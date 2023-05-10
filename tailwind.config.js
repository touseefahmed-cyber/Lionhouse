const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'light-white': '#FFFCF4',
                'gray': '#5D5D5D',
                'black': '#000000',
                'light-yellow': '#F8F3E4',
                'dark-yellow': '#F5A54F',
                'light-yellow': '#838383',
            },
            container: {
                screens:{
                    sm:"1280px",
                    md:"1280px",
                    lg:"1280px",
                    xl:"1280px",
                }
            },
            fontFamily: {
                'space-mono': ['Space Mono', 'monospace'],
              },
            fontSize: {
                xsm: '0.75rem',
                sm: '0.813rem',//13px
                base: '0.875rem',
                xl: '1.25rem',
                '2xl': '1.313rem',//21px
                '3xl':'1.375rem',
              },
              lineHeight: {
                '34': '34px',
                '18': '18px',
                '19': '19px',
                '17': '17px',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}