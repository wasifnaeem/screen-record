import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen-record',
  templateUrl: './screen-record.component.html',
  styleUrls: ['./screen-record.component.scss']
})
export class ScreenRecordComponent implements OnInit {

  @ViewChild('video') videoElementRef: ElementRef;
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef;

  mediaRecorder: any
  recorder: MediaStream;
  videoElement: HTMLVideoElement
  recordVideoElement: HTMLVideoElement

  async ngOnInit() {
    if (this.hasGetUserMedia) {
      this.videoElement = this.videoElementRef.nativeElement
      this.recordVideoElement = this.recordVideoElementRef.nativeElement

      navigator.mediaDevices.getUserMedia({ video: { width: 360 } }).then(stream => {
        try {
          this.videoElement.srcObject = stream
        } catch (error) {
          this.videoElement.src = URL.createObjectURL(stream)
        }
      })
    }
    else {
      alert('getUserMedia() is not supported by your browser')
    }
  }

  onVideoClick() {
    this.videoElement.className = this.filters[this.filterIndex++ % this.filters.length]
    console.log(this.videoElement.className)
  }

  takeSnapshot() {
    let canvas = document.querySelector('canvas')
    canvas.width = this.videoElement.videoWidth
    canvas.height = this.videoElement.videoHeight
    canvas.getContext('2d').drawImage(this.videoElement, 0, 0)

    let img = document.querySelector('img')
    img.src = canvas.toDataURL('image/png')
  }

  async startRecording() {
    navigator.mediaDevices.getUserMedia({ video: { width: 360 } }).then(stream => {
      this.recorder = stream
      this.videoElement.srcObject = stream
    })
  }

  stopRecording() {
    this.recordVideoElement.srcObject = this.recorder
    this.recorder.getTracks().forEach(track => {
      track.stop()
    })
  }

  playRecording() {
    this.recordVideoElement.srcObject = this.recorder
    this.recordVideoElement.play()
  }

  private getMediaStream(): Promise<MediaStream> {
    let constraints: MediaStreamConstraints = {
      video: {
        width: 360
      }
    }

    return navigator.mediaDevices.getUserMedia(constraints)
  }

  hasGetUserMedia(): boolean {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

  filterIndex = 0;
  filters = [
    '',
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate',
    'hue-rotate2',
    'hue-rotate3',
    'saturate',
    'invert',
    ''
  ];

}
