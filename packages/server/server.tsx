import path from "path"
import fs from "fs/promises"
import express from 'express'
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "../client/src/App"



async function startServer() {
    const PORT = 3000;
    const server = express()

    const clientPath = path.resolve(__dirname, "../../client")
    const distPath = path.resolve(clientPath, 'dist')

    
    server.use(express.static(distPath))
    server.use("*", async (req, res) => {
        try {

            let template = await fs.readFile(path.resolve(distPath, 'index.html'), 'utf-8')
            let htmlApp = ReactDOMServer.renderToString(<App/>)
            template = template.replace('<div id="root"></div>', `<div id="root">${htmlApp}</div>`)

            res.status(200).contentType(" text/html ")
            res.send(template)

        } catch (error) {
            console.error(error)
        }
    })

    server.listen(PORT, () => {
        
        console.log(`Server listen port ${PORT}`)
    })
}

startServer()