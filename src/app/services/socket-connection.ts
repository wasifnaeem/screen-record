import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SocketConnection {

    socket: SocketIOClient.Socket
    constructor() {
        console.log(environment.server)
        this.socket = io(environment.server)

        this.socket.connect()

        this.socket.on('connection', () => {
            console.log('Connected with server through Socket')
        })
    }

}

