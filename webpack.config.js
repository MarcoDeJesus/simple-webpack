const path = require('path');

// https://webpack.js.org/configuration/
module.exports = {
    entry: {
        about: "./src/about.js",
        contact: "./src/contact.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    // https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
    // https://webpack.js.org/guides/code-splitting/#splitchunksplugin

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    // https://github.com/babel/babel-loader
                    loader: 'babel-loader',
                    // https://babeljs.io/docs/en/babel-preset-env
                    // https://babeljs.io/docs/en/babel-preset-react
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test:/\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use: {
                    loader: 'url-loader'
                }
            }        
        ]
    },
}