const config = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...config,
    devServer: {
        open: true,
        host: 'localhost',
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};