import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as SimplePeer from "simple-peer";

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
  peer = SimplePeer();
  stream: MediaStream

  async ngOnInit() {
    try {
      // This peer is the initiator and transfering the streaming to the other connected peer 
      if (location.hash === '#init') {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true })

        this.videoElement.srcObject = stream
        this.peer = new SimplePeer({
          initiator: location.hash === '#init',
          trickle: true,
          stream: stream
        })
      }
      else {
        this.peer = new SimplePeer()
      }

      // triggers when signal is sent from remote
      this.peer.on('signal', function (data) {
        console.log(JSON.stringify(data));
      })

      // this.peer.on('data', (data) => {
      //   console.log('Received Data: ' + data)
      // })

      this.peer.on('stream', (stream) => {
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
