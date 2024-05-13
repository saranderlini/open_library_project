const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');
const historyApiFallback = require('connect-history-api-fallback');
const loader = require('sass-loader');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


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
        extensions: ['.js', '.jsx', '.scss'],
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
        new FaviconsWebpackPlugin({
            logo: './src/img/favicon.png', 
        }),
        new Dotenv({
            path: './some.other.env', // load this now instead of the ones in '.env'
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
            allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false, // load '.env.defaults' as the default values if empty.
            prefix: 'import.meta.env.' // reference your env variables as 'import.meta.env.ENV_VAR'.
        })
    ],
}