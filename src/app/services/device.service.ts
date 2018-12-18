import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as socketIo  from "socket.io-client";

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

  private socket
  constructor(private http: HttpClient) {
    let device: string = `//192.168.10.20:8080` //Pakistan Ipeez Network
    let me: string = `//192.168.10.7:4200`
    let AW: string = `http://192.168.10.6`
    let google: string = `https://www.google.com`
    let youtube: string = `https://www.youtube.com`

    this.socket = socketIo(device)
  }

  getPersonalDeviceInfo() {
    return this.http.get<IPersonalDeviceInfo>('https://ipinfo.io/json')
  }

  location(): Location {
    return window.location // this will give you the ip:port
    //if you just want the ip or hostname you can use window.location.hostname
  }

  ping() {
    console.log(this.socket)
    this.socket.connect()
  }

}
