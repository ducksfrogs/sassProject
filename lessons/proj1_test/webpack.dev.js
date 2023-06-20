const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge( common, {
    mode: 'development',
    devServer: {
        static: './dist',
        port: 8081,
        hot: true
    },
});
