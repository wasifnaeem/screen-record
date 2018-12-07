import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-record-webrtc',
  templateUrl: './record-webrtc.component.html',
  styleUrls: ['./record-webrtc.component.scss']
})
export class RecordWebrtcComponent implements OnInit {

  @ViewChild('video') videoElement: ElementRef;

  localStream;

  ngOnInit() {
    const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
    new RTCPeerConnection({

    })
    navigator.mediaDevices.getUserMedia({
      video: {
        frameRate: 20
      }
    }).then((stream) => {
      this.localStream = stream;
      videoElement.srcObject = stream // = window.URL.createObjectURL(stream);
      // videoElement.play()
    })
  }

  stopStream() {
    const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }

}
