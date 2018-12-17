import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IPersonalDeviceInfo {
  city: string
  ip: string
  country: string
  loc: string
  org: string
  postal: string
  region: string
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getPersonalDeviceInfo() {
    return this.http.get<IPersonalDeviceInfo>('https://ipinfo.io/json')
  }

  ngOnInit(): void {

    var ip = window.location.origin // this will give you the ip:port
    //if you just want the ip or hostname you can use window.location.hostname

    console.log(ip)
    console.log(window.location)
  }

}
