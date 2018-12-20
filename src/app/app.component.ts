import { Component } from '@angular/core';
import { SocketConnection } from './services/socket-connection';
import { Global } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socketConnection: SocketConnection, private global: Global) {
    this.global.socket = this.socketConnection.socket
  }

}
