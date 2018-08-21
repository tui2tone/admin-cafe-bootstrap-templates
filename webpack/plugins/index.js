const html = require('./html')
const dashboard = require('./dashboard')
const css = require('./css')

const plugins = [
    ...dashboard,
    ...html,
    ...css
]

module.exports = plugins