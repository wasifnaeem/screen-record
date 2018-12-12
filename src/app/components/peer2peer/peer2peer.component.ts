import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-peer2peer',
  templateUrl: './peer2peer.component.html',
  styleUrls: ['./peer2peer.component.scss']
})
export class Peer2peerComponent implements OnInit {

  localUser = new RTCPeerConnection()
  remoteUser = new RTCPeerConnection()

  ngOnInit() {
    // let peer = new SimplePeer()
    // console.log(peer)

    this.localUser.onicecandidate = (e) => {
      if (e.candidate)
        this.remoteUser.addIceCandidate(e.candidate)
    }

    this.remoteUser.onicecandidate = (e) => {
      if (e.candidate)
        this.localUser.addIceCandidate(e.candidate)
    }

    navigator.mediaDevices.getUserMedia({
      video: {
        width: 360
      }
    }).then(stream => {
      this.LocalVideoElement.srcObject = stream
      this.localUser.addStream(stream)
      return this.localUser.createOffer()
    }).then(offer => this.localUser.setLocalDescription(new RTCSessionDescription(offer)))
      .then(() => this.remoteUser.setRemoteDescription(this.localUser.localDescription))
      .then(() => this.remoteUser.createAnswer())
      .then(answer => this.remoteUser.setLocalDescription(new RTCSessionDescription(answer)))
      .then(() => this.localUser.setRemoteDescription(this.remoteUser.localDescription))

    this.remoteUser.ontrack = e => {
      this.RemoteVideoElement.srcObject = e.streams[0]
    }

  }

  @ViewChild('local') localVideoElementRef: ElementRef
  get LocalVideoElement(): HTMLVideoElement {
    return this.localVideoElementRef.nativeElement
  }

  @ViewChild('remote') remoteVideoElementRef: ElementRef
  get RemoteVideoElement(): HTMLVideoElement {
    return this.remoteVideoElementRef.nativeElement
  }

}
