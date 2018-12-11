import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-screen-record',
  templateUrl: './screen-record.component.html',
  styleUrls: ['./screen-record.component.scss']
})
export class ScreenRecordComponent implements OnInit {

  mediaRecorder: MediaRecorder
  recordedBlobs: Blob[]
  isRecording: boolean = false
  downloadUrl: string
  stream: MediaStream

  constructor() {
  }

  async ngOnInit() {
    this.startStreaming()
  }

  startStreaming() {
    let constraints: MediaStreamConstraints = {
      video: {
        width: 360
      }
    }

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      this.stream = stream

      // let context: CanvasRenderingContext2D = this.Canvas.getContext('2d')
      // let capture = this.Canvas.captureStream(30)

      // console.log(capture)
      this.VideoElement.srcObject = this.stream
    })
  }

  startRecording() {
    this.recordedBlobs = []
    let options: MediaRecorderOptions = { mimeType: 'video/webm' }

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options)
    } catch (err) {
      console.log(err)
    }

    this.mediaRecorder.start() // collect 100ms of data
    this.isRecording = !this.isRecording
    this.onDataAvailableEvent()
    this.onStopRecordingEvent()
  }

  stopRecording() {
    this.mediaRecorder.stop()
    this.isRecording = !this.isRecording
    console.log('Recorded Blobs: ', this.recordedBlobs)
  }

  playRecording() {
    if (!this.recordedBlobs || !this.recordedBlobs.length) {
      console.log('cannot play.')
      return
    }
    this.RecordVideoElement.play()
  }




  // Events
  onDataAvailableEvent() {
    try {
      this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  onStopRecordingEvent() {
    try {
      this.mediaRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' })
        this.downloadUrl = window.URL.createObjectURL(videoBuffer) // you can download with <a> tag
        this.RecordVideoElement.src = this.downloadUrl
      }
    } catch (error) {
      console.log(error)
    }
  }





  //  Properties
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef
  get VideoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement
  }

  @ViewChild('video') videoElementRef: ElementRef
  get RecordVideoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement
  }

  @ViewChild('canvas') canvasElementRef: ElementRef
  get Canvas(): HTMLCanvasElement {
    let canvas: HTMLCanvasElement = this.canvasElementRef.nativeElement
    canvas.width = 400
    canvas.height = 400
    return canvas
  }

}
