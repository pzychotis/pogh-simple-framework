const { resolve } = require('node:path');

module.exports = {
    entry: './src/index.mjs',
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
    output: {
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.(mjs|js|jsx)$/i, loader: 'babel-loader' },
            { test: /\.css$/i, use: ['style-loader','css-loader'] },
            { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i, type: 'asset' },
        ],
    },
};
