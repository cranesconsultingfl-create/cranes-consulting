/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2F8',
          100: '#DBE3EF',
          200: '#B3C2D9',
          300: '#7F94B5',
          400: '#4E6890',
          500: '#2E4770',
          600: '#1E3A5F',
          700: '#152B47',
          800: '#0F2444',
          900: '#081530',
        },
        amber: {
          50:  '#FDF7E8',
          100: '#FBEDC7',
          200: '#F6DB8F',
          300: '#F0C55A',
          400: '#E8A838',
          500: '#D18F22',
          600: '#A76F19',
          700: '#7D5311',
          800: '#53370A',
          900: '#2A1B05',
        },
        bone: {
          50:  '#FDFCF9',
          100: '#FAFAF7',
          200: '#F5F1E8',
          300: '#E8E2D1',
        },
        ink: {
          DEFAULT: '#0A0F1C',
          soft:    '#1A2332',
          mute:    '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      maxWidth: {
        'prose-tight': '62ch',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(15,36,68,0.04), 0 12px 32px -12px rgba(15,36,68,0.12)',
        'card-lg': '0 2px 4px rgba(15,36,68,0.06), 0 24px 56px -16px rgba(15,36,68,0.18)',
      },
      backgroundImage: {
        'grid-navy': "linear-gradient(rgba(15,36,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,36,68,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
