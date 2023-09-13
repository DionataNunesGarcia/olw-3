import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {
                    '100': '#feb1dd',
                    '200': '#ff79c5',
                    '300': '#fd32a9',
                    '400': '#f80091',
                    '500': '#f60077',
                },
                'secondary': {
                    '100': '#DCEDC8',
                    '200': '#C5E1A5',
                    '300': '#AED581',
                    '400': '#9CCC65',
                    '500': '#8BC34A',
                },
                'tertiary': {
                    '800': '#0E1117',
                    '900': '#282A36',
                }
            }
        },
    },

    plugins: [forms],
};
