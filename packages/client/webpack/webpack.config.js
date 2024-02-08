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
                name: "public/[hash].[ext]"
            }
        }
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { 
            App: path.resolve(__dirname, '../src/App/'),
            Pages: path.resolve(__dirname, '../src/Pages/'),
            Components: path.resolve(__dirname, '../src/Components/'),
        },
    }

    return {
        modules,
        resolve,
    }
}