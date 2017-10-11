const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

//Dashboard
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

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
      __dirname + "/aslstrong/",
      path.resolve(__dirname, "/aslstrong/js/"),
  ],
    extensions: ['', '.js']
  },

  resolveLoader: {
    root: node_modules_dir
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "/[name].js",
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
        loader: "url-loader?limit=8192&minetype=application/font-woff&name=/[name].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=8192&minetype=application/octet-stream&name=/[name].[ext]"
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
      filename: "/vendors.js",
      minChunks: 2,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'BayCare HealthNav',
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
