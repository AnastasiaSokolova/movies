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
        port: 8080,
        proxy: {
            '/**': {  //catch all requests
                target: '/index.html',  //default target
                secure: false,
                bypass: function(req, res, opt){
                    console.log(res)
                    //your custom code to check for any exceptions
                    //console.log('bypass check', {req: req, res:res, opt: opt});
                    if(req.path.indexOf('/callback') !== -1){
                        return '/callback'
                    }



                    /*if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }*/
                }
            }
        }
    },
    mode: 'development'
};