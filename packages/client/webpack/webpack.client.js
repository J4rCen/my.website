const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpackConfig = require('./webpack.config')

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    const modeEnv = argv.mode || 'development'
    const isProd = modeEnv === 'production'
    const config = webpackConfig(modeEnv)

    const optimizations = {
        splitChunks: { 
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [],
    }

    if (isProd) {
        optimizations.minimizer.push(new UglifyJsPlugin())
    }

    return {
        devServer: {
            static: {
              directory: path.join(__dirname, '../dist'),
            },
            compress: true,
            port: 9000,
            hot: true
        },
        resolve: config.resolve,
        module: {
            rules: [
                config.modules.js,
                config.modules.scss,
                config.modules.file,
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../index.html'), // Скармливаем наш HTML-темплейт
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
            new MiniCssExtractPlugin()
        ],
        entry: {
            main: path.resolve(__dirname, '../index.tsx'), // Энтрипоинт-файл, с которого и начнется наша сборка
        },
        output: {
            filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js', // небольшое условие, т.к. WDS не будет работать с chunkhash
            path: path.resolve(__dirname, '../dist'), // Весь наш результат складываем в папку dist
            assetModuleFilename: 'public/[hash][ext]',
            publicPath: '/',
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
    }
}