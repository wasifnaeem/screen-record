import { Component, OnInit } from '@angular/core';
// import * as findLocalDevices from 'local-devices';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find-device',
  templateUrl: './find-device.component.html',
  styleUrls: ['./find-device.component.scss']
})
export class FindDeviceComponent implements OnInit {

  results
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log(findLocalDevices())

    // var ip = window.location.origin // this will give you the ip:port
    // //if you just want the ip or hostname you can use window.location.hostname
    // var url = ip + '/api/';
    // var endpoint = 'test/';

    // this.http.get(url + endpoint).subscribe(data => {
    //   this.results = data['test'];
    //   console.log(this.results)
    // })
  }

}
