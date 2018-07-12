const PATH = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./src/entry.js",
  output: {
    filename: "bundle.js",
    path: PATH.resolve(__dirname, "build")
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }]
  },
  resolve: {
    // alias: {
    //   'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    // }
  },
  devServer: {
    contentBase: PATH.resolve(__dirname, "build")
  },
  plugins: [new CopyWebpackPlugin([ {
    from: './src/index.html',
    target: './build/index.html',
  } ]),
  new VueLoaderPlugin()]
};
