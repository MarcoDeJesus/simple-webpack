const path = require('path');

// https://webpack.js.org/configuration/
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
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
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}