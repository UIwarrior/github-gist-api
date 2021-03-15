const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.js'],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "./index.html"
        }),
    ],
    devServer: {
        historyApiFallback: true,
        // hot: true,
      }
};