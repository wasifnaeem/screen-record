import { OnInit, Component } from '@angular/core';
import * as io from "socket.io-client";
import { environment } from "../../../environments/environment";
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {

  socket: SocketIOClient.Socket
  msg: string
  msgs: string[]
  constructor() {
    this.msgs = new Array<string>()
  }

  ngOnInit() {
    console.log(environment.server)
    this.socket = io(environment.server)

    this.socket.connect()

    this.socket.on('connection', () => {
      console.log('Connected with server through Socket')
    })

    this.receiveMessage()
  }

  receiveMessage() {
    this.socket.on('calling-from-server', (data: any) => {
      this.msgs.push(data)
    })
  }

  sendMessage() {
    this.socket.emit('invoking-from-client', this.msg)
    this.msgs.push('Client: ' + this.msg)
    this.msg = ''
  }

}
