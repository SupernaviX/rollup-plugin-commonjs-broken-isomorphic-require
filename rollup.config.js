import commonjs from '@rollup/plugin-commonjs';
export default {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'dist/app.js'
  },
  plugins: [
    commonjs(),
  ]
}