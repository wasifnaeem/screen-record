import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-record',
  templateUrl: './video-record.component.html',
  styleUrls: ['./video-record.component.scss']
})
export class VideoRecordComponent implements OnInit {
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef
  @ViewChild('video') videoElementRef: ElementRef

  videoElement: HTMLVideoElement
  recordVideoElement: HTMLVideoElement
  mediaRecorder: MediaRecorder
  recordedBlobs: Blob[]
  isRecording: boolean = false
  downloadUrl: string
  stream: MediaStream

  constructor() {
  }

  async ngOnInit() {
    this.videoElement = this.videoElementRef.nativeElement
    this.recordVideoElement = this.recordVideoElementRef.nativeElement

    navigator.mediaDevices.getUserMedia({
      video: {
        width: 360
      }
    }).then(stream => {
      this.stream = stream
      this.videoElement.srcObject = this.stream
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
    this.recordVideoElement.play()
  }

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
        this.recordVideoElement.src = this.downloadUrl
      }
    } catch (error) {
      console.log(error)
    }
  }

}
