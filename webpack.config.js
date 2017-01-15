var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); 

module.exports = {

    // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./app", 
        port: 8080,
        proxy: {
           '/api/**': {
             target: 'http://test.com',
             secure: false,
             changeOrigin: true
           }
        }
    },
    entry: {
        pages: __dirname +'/app/src/router.jsx',
        vendors:['react','react-dom','react-router','Recharts']  //抽取公共框架
    },
    output: {
        publicPath: 'dist',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style','css') }, //坑：不能用叹号链接，必须写成这种格式
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css!less') },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192&name=/img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors','js/vendors.js'),
        new ExtractTextPlugin("css/bundle.css"),
        new webpack.ProvidePlugin({ $: "jquery" }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
    ]
};
