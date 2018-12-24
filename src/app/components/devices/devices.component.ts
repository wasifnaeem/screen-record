import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }












  private isSelectForAllDevices: boolean
  get IsSelectedForAllDevices(): boolean {
    return this.isSelectForAllDevices
  }

  private refreshIcon: string = './../../../assets/images/Devices-Screen/devicesscreen_btn_refresh.png'
  get RefreshIcon(): string {
    return this.refreshIcon
  }
}
