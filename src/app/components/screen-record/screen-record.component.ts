import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen-record',
  templateUrl: './screen-record.component.html',
  styleUrls: ['./screen-record.component.scss']
})
export class ScreenRecordComponent implements OnInit {

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
