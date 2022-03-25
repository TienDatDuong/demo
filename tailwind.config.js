module.exports = {
  rules: [{
    test: /.(png|jpe?g|gif|webp|avif)$/i,
    use: [{loader: 'file-loader'}]
  }],
  rules: [{
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
  }],
  mode: 'jit',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        wiggle: 'wiggle 4s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%': { height: 0,opacity:0 },
          '100%': { height:53,opacity:1 },
          
        }
      },
      colors: {
        gray33:"#0a192f",
        text:"#59e2c5"
      },
      spacing: {
        'h-28': '100px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}