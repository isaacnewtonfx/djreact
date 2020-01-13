/* global __dirname, process */
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {

        watch : true,
        mode : "development",
        context: path.join(__dirname, 'reactjs', 'src'),

        entry: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            'index'
        ],
        output: {
            path: path.resolve('./reactjs/dist/'),            
            filename: '[name]-[hash].js',
            publicPath: 'http://127.0.0.1:3000/reactjs/dist/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name

        },
        module: {
            rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'react-hot-loader/webpack',
                        options: {}
                    },
                    {
                        loader: 'babel-loader',
                        options: {},  // babel-preset-env etc...
                    },
                ],
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader',]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            {
                test: /\.(png|woff|woff2|svg|webp|eot|ttf|gif|jpe?g)$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 1000,
                    name: '[path][name].[hash].[ext]',
                    },
                },
                ],
            },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['reactjs/src/', 'node_modules'],
            alias: {},
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
            new webpack.HashedModuleIdsPlugin(),
            new BundleTracker({
                filename: './webpack-stats-dev.json',
            }),
        ]

}