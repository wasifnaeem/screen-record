import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as SimplePeer from 'simple-peer';
import { Global } from 'src/app/globals';
import { SimplePeerService } from 'src/app/services/simple-peer.service';

interface RTCconnectionInfo {
  type: string
  sdp: string
}

@Component({
  selector: 'app-screen-share',
  templateUrl: './screen-share.component.html',
  styleUrls: ['./screen-share.component.scss']
})
export class ScreenShareComponent implements OnInit {

  targetpeer: any;
  peer: SimplePeer.Instance;
  stream: MediaStream
  socket: SocketIOClient.Socket
  constructor(private global: Global) {
    this.socket = this.global.socket
  }

  async ngOnInit() {
    try {
      let stream: MediaStream
      if (location.hash === '#init') {
        stream = await navigator.getDisplayMedia({
          video: true
        })
        console.log(stream)
        this.socket.emit('stream', stream)
      }

      this.socket.on('stream', (stream: any) => {
        console.log('stream started')
        console.log(stream)
        this.videoElement.srcObject = stream
        this.videoElement.play()
      })
    } catch (error) {
      console.log(error)
    }
  }

  @ViewChild('myvideo') videoElementRef: ElementRef
  get videoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement
  }
}
