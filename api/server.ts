import * as socketIO from "socket.io";
import app from './app';
import * as net from 'net'
import { TCPclient } from './tcp-client';

export class Server {

    io: socketIO.Server
    constructor() {
        let tcpClient = new TCPclient('192.168.0.101', 3700)

        const port = 3000 || process.env.PORT
        const server = app.listen(3000, '0.0.0.0', () => {
            // console.log(`Http Server is listening on Port: ${port}`)
        })

        this.io = socketIO(server)

        let count: number = 0
        this.io.on('connect', () => console.log('No. of clients: ', ++count))
        this.io.on('connection', (socket: socketIO.Socket) => {
            socket.on('disconnect', () => console.log('No. of clients: ', --count))

            socket.on('invoking-from-client', (data) => {
                socket.broadcast.emit('CHAT', data)
                socket.broadcast.emit('calling-from-server', data)
            })

            socket.on('msg', (data) => {
                socket.broadcast.emit('calling-from-server', data)
            })

            socket.on('stream', (data) => {
                console.log(data)
                socket.broadcast.emit('stream', data)
            })
        })
    }
}

export default new Server()
