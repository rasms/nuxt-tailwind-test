import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    plugins: [require('daisyui')],
    theme: {
        extend: {
            fontFamily: {
                head: ['Space Grotesk', 'sans-serif'],
            }
        }
    }
}