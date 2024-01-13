const path = require("path")

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
            use: ["style-loader",'css-loader', 'sass-loader' ]
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