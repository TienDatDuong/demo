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
    extend: {
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