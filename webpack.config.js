const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        index: './source/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: false
                        }
                    }
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
};
