const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const pages = {
    'index': 'Index',
    'landing': 'Landing',
    'components': 'Components',
    'login': 'Login',
    'form': 'Form'
};

const plugins = [
    ...Object.keys(pages).map(title => {
        return new HtmlWebpackPlugin({
          template: path.join('./src', `${title}.html`),
          path: './dist',
          filename: `${title}.html`,
          minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            useShortDoctype: true,
          },
        });
    })
]

module.exports = plugins