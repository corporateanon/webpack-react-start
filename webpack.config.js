module.exports = {
  context: __dirname,
  entry: "./app.js",
  devtool: "#inline-source-map",
  module: {
    loaders: [
     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      // { test: /\.less$/, loader: "style!css!less" },
      // { test: /\.png$/, loader: "file?prefix=img/" }
    ]
  }
}
