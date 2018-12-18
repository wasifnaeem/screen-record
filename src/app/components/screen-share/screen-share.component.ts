import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import * as SimplePeer from 'simple-peer'
import { DeviceService } from 'src/app/services/device.service';
import * as _ from "underscore";
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

  constructor(private peerService: SimplePeerService) {
    console.log(_.now())
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

      // peer.on('data', (data) => {
      //   console.log('Received Data: ' + data)
      // })

      peer.on('stream', (stream) => {
        // got remote video stream, now let's show it in a video tag
        this.videoElement.srcObject = stream
        this.videoElement.play()
      })
    } catch (error) {
      console.log(error)
    }
  }

  connect() {
    this.peer.signal(this.targetpeer)

    let info: RTCconnectionInfo = JSON.parse(this.targetpeer)
    if (info.type === 'answer') {
      console.log('connected established')
    }
  }

  message() {
    this.peer.send('Hello world')
  }

  @ViewChild('myvideo') videoElementRef: ElementRef
  get videoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement
  }
}
