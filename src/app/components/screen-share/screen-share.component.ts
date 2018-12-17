import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import * as SimplePeer from 'simple-peer'
import { DeviceService } from 'src/app/services/device.service';

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

  constructor(private deviceService: DeviceService) {

  }

  async ngOnInit() {
    try {
      this.deviceService.ngOnInit()

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
        console.log(JSON.stringify(data))
      })

      // this.peer.on('data', (data) => {
      //   console.log('Received Data: ' + data)
      // })

      this.peer.on('stream', (stream) => {
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
