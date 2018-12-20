import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/globals';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {

  socket: SocketIOClient.Socket
  msg: string
  msgs: string[]
  constructor(private global: Global) {
    this.msgs = new Array<string>()
  }

  ngOnInit() {
    this.socket = this.global.socket

    this.receiveMessage()
  }

  receiveMessage() {
    this.socket.on('calling-from-server', (data: any) => {
      this.msgs.push(data)
    })
  }

  sendMessage() {
    this.socket.emit('invoking-from-client', this.msg)
    this.msgs.push(this.msg)
    this.msg = ''
  }

}
