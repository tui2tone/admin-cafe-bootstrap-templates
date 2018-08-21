const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const plugins = [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]

module.exports = plugins