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
        port: 8080
        // 开发过程中可设置代理
        // proxy: {
        //    '/api/**': {
        //      target: 'http://test.com',
        //      secure: false,
        //      changeOrigin: true
        //    }
        // }
    },
    devtool:"cheap-module-eval-source-map",  //在控制台的sources下，点开可以看到webpack://目录，里面可以直接看到我们开发态的源代码，这样方便我们直接在浏览器中打断点调试
    entry: {
        pages: __dirname +'/app/src/router.jsx',
        vendors:['react','react-dom','react-router']  //抽取公共框架
    },
    output: {
        publicPath: 'dist',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'}) }, //坑：不能用叹号链接，必须写成这种格式
            { test: /\.less$/, loader: ExtractTextPlugin.extract({use: 'css-loader!less-loader'}) },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=/img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/vendors.js'}),
        new ExtractTextPlugin("css/bundle.css"),
        new webpack.ProvidePlugin({ $: "jquery" }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
    ]
};
