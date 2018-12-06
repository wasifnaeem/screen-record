import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { CanvasRecorder } from '../../models/canvas-recorder.model';

@Component({
  selector: 'app-screen-record',
  templateUrl: './screen-record.component.html',
  styleUrls: ['./screen-record.component.scss']
})
export class ScreenRecordComponent implements OnInit {

  @ViewChild('canvas') canvasRef: ElementRef
  @ViewChild('video') videoRef: ElementRef
  constructor() {

  }

  canvas: HTMLCanvasElement
  video: HTMLVideoElement
  recorder: CanvasRecorder
  ngOnInit() {
    this.video = this.videoRef.nativeElement

    this.canvas = this.canvasRef.nativeElement
    this.canvas.width = 640
    this.canvas.height = 460
  }

  startRecording() {
    let CanvasRecorder = RecordRTC.CanvasRecorder
    this.recorder = new CanvasRecorder(this.canvas, { disableLogs: true });
    this.recorder.record()
  }

  stopRecording() {
    this.recorder.stop((blob: Blob) => {
      console.log(blob)
      console.log(URL.createObjectURL(blob))
      this.video.src = URL.createObjectURL(blob)
    });
  }

}
