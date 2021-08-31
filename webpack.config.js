// 当使用了html-webpack-plugin时，devServer的contentBase无效！！！！！。这时会直接打开打包代码输出的文件夹（output），并且打开这个文件夹下的index.html。
// 如果这时指定了文件明给index属性，这个时候会打开output指定的文件夹并且打开这个index指定的文件明。

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    port: "3000"
    // contentBase: './src/index.html'  // 会报错无效属性， 可能和 HtmlWebpackPlugin 有冲突
  }
}