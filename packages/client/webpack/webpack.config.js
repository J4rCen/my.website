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
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { 
            App: path.resolve(__dirname, '../src/App/'),
            Pages: path.resolve(__dirname, '../src/Pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}