const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
       new HtmlWebpackPlugin({template: './index.html'}),
       new OpenBrowserPlugin({url: 'http://localhost:8080'}),
       new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
           {
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
              loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [require('@babel/plugin-syntax-dynamic-import')]
                }
              }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 8080
    },
    mode: 'development'
};