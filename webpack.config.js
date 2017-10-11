var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

//Dashboard
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  context: __dirname + "/baycare",

  entry: {
    baycare: [
      "bootstrap-webpack!./bootstrap.config.js",
      "./js/app.js",
    ],

    vendors: [
      "react",
      "react-bootstrap",
      "react-dom",
      "react-router",
    ],
  },

  resolve: {
    root: [
      __dirname + "baycare/",
      path.resolve(__dirname, "baycare/js/"),
  ],
    extensions: ['', '.js']
  },

  resolveLoader: {
    root: node_modules_dir
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },

  module: {
    loaders: [
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?presets[]=react&presets[]=es2015"]
      },
      // Stylesheets
      {
        test: /\.scss$/,
        loader: "style!css!resolve-url!sass?sourceMap"
      },
      // Fonts
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=8192&minetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=8192&minetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=8192&minetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=8192'
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      filename: "vendors.js",
      minChunks: 2,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Baycare HealthNav',
      template: 'index.ejs',
    }),
    new DashboardPlugin(dashboard.setData),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ],

  // Development
  devServer: {
    contentBase: "./baycare",
    historyApiFallback: true

  }
};
