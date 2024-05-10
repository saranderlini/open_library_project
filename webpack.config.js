const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');
const historyApiFallback = require('connect-history-api-fallback');
const loader = require('sass-loader');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
    mode: 'development',
    target: 'web', 
    entry: {
        bundle: path.resolve(__dirname, 'src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    resolve: {

        /* polyfills used to be included, now they must be manually added. however, they will error out if not added */
        /* thus the :false fallbacks */
        fallback: { 
            "path": false,
            "crypto": false,
        }
    },
    //maps
    devtool: 'source-map',
    //devServer
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    //loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // loader: 'file-loader',
                // options: {
                //     name: '[path][name].[ext]',
                // },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                },
                exclude: path.resolve(__dirname, 'src/template.html')
            },
        ]
    },
    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Open Library',
            filename: 'index.html',
            template: 'src/template.html',
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Open Library',
        //     filename: 'templateTwo.html',
        //     template: 'src/templateTwo.html',
        //     chunks: [],
        // }),
    ],
}