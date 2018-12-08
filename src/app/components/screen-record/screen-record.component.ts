import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen-record',
  templateUrl: './screen-record.component.html',
  styleUrls: ['./screen-record.component.scss']
})
export class ScreenRecordComponent implements OnInit {

  @ViewChild('video') videoElementRef: ElementRef;
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef;

  recordMedia: MediaStream;
  videoElement: HTMLVideoElement
  recordVideoElement: HTMLVideoElement
  chunks: MediaStream

  async ngOnInit() {
    this.videoElement = this.videoElementRef.nativeElement
    this.recordVideoElement = this.recordVideoElementRef.nativeElement

    let stream: MediaStream = await this.getMediaStream()
    this.videoElement.srcObject = stream
  }

  async startRecording() {
    let stream: MediaStream = await this.getMediaStream()

    this.videoElement.srcObject = stream
    this.chunks = stream
  }

  private getMediaStream(): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({
      video: {
        width: 360
      }
    })
  }

  stopRecording() {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 360
      }
    }).then((stream) => {
      this.videoElement.srcObject = stream
    })
  }

  playRecording() {
    this.recordVideoElement.srcObject = this.chunks
    this.recordVideoElement.play()
  }
}
