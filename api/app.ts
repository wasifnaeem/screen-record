import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as fs from "fs";
import * as path from "path";

class ExpressConfig {

    app: express.Application

    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    private middlewares() {
        try {
            // static path for images
            this.app.use('/images', express.static(path.join(`${__dirname}/images`)))

            // creates the directory 'images' if it does not exists
            fs.existsSync(__dirname + "/images") || fs.mkdirSync(__dirname + "/images")

            this.app.use(cors())

            // support application/json type post data
            this.app.use(bodyParser.json())
            this.app.use(bodyParser.urlencoded({ extended: false }))
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }

    private routes() {

    }

}

export default new ExpressConfig().app