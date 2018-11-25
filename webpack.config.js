const path = require('path');
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;

module.exports = {

    mode: 'development',

    entry: {
        browser: './app/index.js',
    },

    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'app'),
        ]
    },
    plugins: [new VueLoaderPlugin()],

};
