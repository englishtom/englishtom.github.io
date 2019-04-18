const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = () => {
    const MODE = process.argv.indexOf('-p') > -1 ? 'production' : 'development';

    return {
        mode: MODE,
        entry: ['babel-polyfill', './src/main.js'],
        output: {
            path: path.resolve(__dirname),
            filename: './js/bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                    exclude: /(node_modules|bower_components)/,
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                // Images larger than 10 KB won’t be inlined
                                limit: 10 * 1024,
                                fallback: 'file-loader',
                                name: '/assets/images/[name].[ext]',
                                useRelativePath: true,
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                // disable: (MODE !== 'production'),
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65,
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                // webp: {
                                // quality: 75,
                                // },
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-url-loader',
                    options: {
                        // Images larger than 10 KB won’t be inlined
                        limit: 10 * 1024,
                        // Remove quotes around the encoded URL –
                        // they’re rarely useful
                        noquotes: true,
                        fallback: 'file-loader',
                        name: '/assets/images/[name].[ext]',
                        useRelativePath: false,
                    },
                },
                {
                    test: /\.(ttf|eot|woff|woff2|mp4)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '/assets/misc/[name].[ext]',
                                useRelativePath: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        (MODE !== 'production') ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            query: {
                                includePaths: [path.resolve(__dirname, 'node_modules')]
                            }
                        },
                    ],
                },
                {
                    test: /\.modernizrrc.js$/,
                    use: ['modernizr-loader'],
                },
                {
                    test: /\.modernizrrc(\.json)?$/,
                    use: ['modernizr-loader', 'json-loader'],
                },
                {
                    test: /\.node$/,
                    use: 'node-loader'
                }
            ],
        },
        stats: {
            colors: true,
        },
        devtool: (MODE === 'development') ? 'source-map' : false,
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
        },
        resolve: {
            alias: {
                modernizr$: path.resolve(__dirname, '.modernizrrc'),
            },
        },
        node: {
            fs: 'empty'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/assets/index.html',
                filename: './index.html',
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: MODE === 'production' ? '/css/[name].[hash].css' : '/css/[name].css',
                // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            })
        ],
    };
};
