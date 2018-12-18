import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as SimplePeer from "simple-peer";
import { SimplePeerService } from 'src/app/services/simple-peer.service';

interface RTCconnectionInfo {
  type: string
  sdp: string
}

@Component({
  selector: 'app-simp-peer',
  templateUrl: './simp-peer.component.html',
  styleUrls: ['./simp-peer.component.scss']
})
export class SimpPeerComponent implements OnInit {

  targetpeer: any;
  peer: SimplePeer.Instance;
  stream: MediaStream

  constructor(private peerService: SimplePeerService) {
  }

  async ngOnInit() {
    try {
      let peer
      if (location.hash === '#init')
        peer = this.peer = await this.peerService.createPeer(true)
      else
        peer = this.peer = await this.peerService.createPeer()

      // triggers when signal is sent from remote
      peer.on('signal', function (data) {
        console.log(JSON.stringify(data))
      })

      // triggers when signal is sent from remote
      peer.on('signal', function (data) {
        console.log(JSON.stringify(data));
      })

      // peer.on('data', (data) => {
      //   console.log('Received Data: ' + data)
      // })

      peer.on('stream', (stream) => {
        // got remote video stream, now let's show it in a video tag
        this.videoElement.srcObject = stream
      })
    } catch (error) {
      console.log(error)
    }
  }

  connect() {
    this.peer.signal(this.targetpeer);

    let info: RTCconnectionInfo = JSON.parse(this.targetpeer)
    if (info.type === 'answer') {
      console.log('connected established')
    }
  }

  message() {
    this.peer.send('Hello world');
  }

  @ViewChild('myvideo') videoElementRef: ElementRef;
  get videoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement
  }
}
