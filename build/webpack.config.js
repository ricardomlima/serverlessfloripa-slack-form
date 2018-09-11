const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Join Serverless Floripa Slack channel',
            template: 'src/index.html'
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port:3000,
        open: true
    }
}
