import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  location(): Location {
    return window.location // this will give you the ip:port
    //if you just want the ip or hostname you can use window.location.hostname
  }

  ip() {
    return this.http.get('https://jsonip.com')
  }

  ping() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })

    return this.http.get('http://192.168.2.101', {
      headers: httpHeaders
    })
  }

}
