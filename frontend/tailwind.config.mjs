/** @type {import('tailwindcss').Config} */
export default {
    // En Tailwind v4 el content suele ser automático, pero puedes dejarlo explícito si quieres seguridad
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'color-bg': 'var(--color-bg)',
                'color-surface': 'var(--color-surface)',
                'color-text': 'var(--color-text)',
                'color-muted': 'var(--color-muted)',
                gold: 'var(--color-gold)',
                border: 'var(--color-border)',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};