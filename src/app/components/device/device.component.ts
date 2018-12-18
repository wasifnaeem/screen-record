import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  response: any
  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.ping()
  }

}
