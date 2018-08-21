const plugins = require('./plugins')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        app: './src/scripts/index.js',
        vendors: './src/scripts/vendors.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].chunkhash.bundle.js',
        chunkFilename: '[name].chunkhash.bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
        port: 9000
    },
    plugins,
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};