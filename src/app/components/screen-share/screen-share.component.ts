import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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
  peer: any;
  stream: MediaStream

  async ngOnInit() {

    // This peer is the initiator and transfering the streaming to the other connected peer 
    if (location.hash === '#init') {
      let stream = await navigator.getDisplayMedia({ video: true })
      this.peer = new SimplePeer({
        initiator: location.hash === '#init',
        trickle: false,
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

    this.peer.on('data', (data) => {
      console.log('Received Data: ' + data)
    })

    this.peer.on('stream', (stream) => {
      // got remote video stream, now let's show it in a video tag
      console.log(stream)
      this.videoElement.srcObject = stream
      this.videoElement.play()
    })
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
