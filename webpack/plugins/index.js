const webpack = require('webpack')
const html = require('./html')
const dashboard = require('./dashboard')
const css = require('./css')

const plugins = [
    ...dashboard,
    ...html,
    ...css,
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        ScrollPosStyler: 'scrollpos-styler'
    })
]

module.exports = plugins