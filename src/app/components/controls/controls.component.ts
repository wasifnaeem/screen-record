import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  connectImg: string
  disconnectImg: string
  shareScreenImg: string
  stopSharingImg: string
  constructor() { }

  ngOnInit() {
    this.connectImg = './../../../assets/images/Devices-Screen/devicesscreen_btn_connect_bottom.png' 
    this.disconnectImg = './../../../assets/images/Devices-Screen/devicesscreen_btn_disconnect_bottom.png'
    this.shareScreenImg = './../../../assets/images/Devices-Screen/devicesscreen_btn_sharescreen_bottom.png'
    this.stopSharingImg = './../../../assets/images/Devices-Screen/devicesscreen_btn_stopsharing_bottom.png'
  }

  connectDevices() {

  }

  disconnectDevices() {

  }

  shareScreen() {

  }

  stopScreenSharing() {

  }

}
