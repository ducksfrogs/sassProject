const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-styeles-entries');
const { CleanwebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: {
        'index': path.resolve(__dirname, "./src/js/index.js"),
        'index.css': path.resolve(__dirname, './src/sass/index.scss')
    },

    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },

    plugins: [
        new CleanwebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
            ],

        }),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]'
        }),
    ],

    watchOptions: {
        ignored: /node_modules/
    }
};