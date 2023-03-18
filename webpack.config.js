const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './app.js',
    mode: 'production',
    target: 'node',
    resolve: {
        extensions: ['.ts','.js']
    },
    externals: [nodeExternals()],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
}