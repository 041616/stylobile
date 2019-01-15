const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


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
            {
                test: /\.sss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]--[hash:base64:5]',
                        }
                    },
                    'postcss-loader'
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         styles: {
        //             name: 'styles',
        //             test: /\.sss$/,
        //             chunks: 'all',
        //             enforce: true
        //         }
        //     }
        // }
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
};
