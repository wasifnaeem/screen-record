import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startRecording()
  }

  async startRecording() {
    let stream = await navigator.getDisplayMedia({ video: true })
    console.log(stream)
    this.videoElement.srcObject = stream
  }

  @ViewChild('video') videoElementRef: ElementRef
  get videoElement(): HTMLVideoElement {
    return this.videoElementRef.nativeElement
  }

}
