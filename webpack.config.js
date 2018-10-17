const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/app/app.jsx',
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
             test: /\.jsx?$/,
             exclude: /(node_modules|bower_components)/,
             use: {
              loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [require('@babel/plugin-syntax-dynamic-import')]
                }
              }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        port: 8080
    },
    mode: 'development'
};