import path from "path"
import fs from "fs/promises"
import express from 'express'
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "../client/src/App"
import transporter from "./createTransport"
import bodyParser from "body-parser"
import cors from "cors"

async function startServer() {
    const PORT = 3001;
    const server = express()

    const clientPath = path.resolve(__dirname, "../packages/client")
    const distPath = path.resolve(clientPath, 'dist')

    server.use(cors())

    server.use(bodyParser.json({ type: 'application/json' }))
    server.use(
        bodyParser.urlencoded({
          extended: false,
        })
    )

    server.post('/sendmail', async (req, res) => {
        try {

            const {name, email, message} = await req.body
            const mes = `${name} \n${email} \n${message}`
            
            await transporter.sendMail({
                from: `<myweb00@mail.ru>`,
                to: "d_davletov@internet.ru",
                subject: 'Сообщения с сайта',
                text: mes,
            });

            return res.status(200).send({ status: 'ok' })
        } catch (error) {
            console.log(error)
        }
    })

    server.get("/ping", async (_, res) => {
        try {
            return res.status(200).send({status: 'pong'})
        } catch (error) {
            console.error(error)
        }
    })

    server.use('*', (_, res) => {
        res.end("There's nothing here")
    })

    server.listen(PORT, () => {
        
        console.log(`Server listen port ${PORT}`)
    })
}

startServer()