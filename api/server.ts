import * as socketIO from "socket.io";
import app from './app';

export class Server {

    io: socketIO.Server
    constructor() {
        const port = 3000 || process.env.PORT
        const server = app.listen(3000, '0.0.0.0', () => {
            console.log(`Listening on Port: ${port}`)
        })

        this.io = socketIO(server)

        let count: number = 0
        this.io.on('connect', () => console.log('No. of clients: ', ++count))
        this.io.on('connection', (socket: socketIO.Socket) => {

            socket.on('invoking-from-client', (data) => {
                console.log(data)
                let msg: string = 'Server: Thank you, Client'
                socket.emit('calling-from-server', msg)
            })

            socket.on('disconnect', () => console.log('No. of clients: ', --count))
        })
    }

}

export default new Server()
