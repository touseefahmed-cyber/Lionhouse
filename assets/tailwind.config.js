const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'light-white': '#FFFCF4',
                'simple-gray': '#909090',
                'gray': '#5D5D5D',
                'black': '#000000',
                'light-yellow': '#F8F3E4',
                'dark-yellow': '#F5A54F',
                'light-gray': '#6A6A6A',
                'light-silver': '#838383',
                'orange': '#F5A54F',
                'l-black': '#2C2C2C',
                'white-yellow': '#F7F1E2',
            },
            container: {
                screens:{
                    sm:"1212px",
                    md:"1212px",
                    lg:"1212px",
                    xl:"1212px",
                }
            },
            fontFamily: {
                'space-mono': ['Space Mono', 'monospace'],
              },
            fontSize: {
                xxsm: '0.625rem',//12
                xsm: '0.75rem',//12
                sm: '0.813rem',//13px
                base: '0.875rem',//14px
                xl: '1.25rem',//20px
                '2xl': '1.313rem',//21px
                '3xl':'1.375rem',//22px
                '4xl':'3rem',//48px
                '5xl':'7.75rem',//124
                '6xl':'9.375rem',//124
                '7xl':'11.625rem',//186
                '8xl':'16.375rem',//262px
              },
              lineHeight: {
                '34': '34px',
                '18': '18px',
                '19': '19px',
                '17': '17px',
                '13': '13px',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}