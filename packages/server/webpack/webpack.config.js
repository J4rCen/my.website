const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {

    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },

        scss: {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        },
        
        file: {
            test: /\.(png)$/i,
            loader: "file-loader",
            options: {
                name: "assets/[hash].[ext]"
            }
        }
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    }

    return {
        modules,
        resolve,
    }
}