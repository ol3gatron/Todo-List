const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
    ],
  },
  entry: {
    index: "./src/index.js",
    form: "./src/components/form.js",
    sidebar: "./src/components/sidebar.js",
    addTodo: "./src/components/addTodo.js",
    categoryForm: "./src/components/categoryForm.js",
    mobileSidebar: "./src/components/mobileSidebar.js",
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  optimization: {
    runtimeChunk: "single"
  },
};