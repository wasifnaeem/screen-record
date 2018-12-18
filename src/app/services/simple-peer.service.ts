import { Injectable } from '@angular/core';
import * as SimplePeer from 'simple-peer'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimplePeerService {

  constructor() { }

  async createPeer(initiator?: boolean): Promise<SimplePeer.Instance> {

    let peer: SimplePeer.Instance

    if (initiator) {
      // This peer is the initiator and transfering the streaming to the other connected peer 
      let stream = await navigator.getDisplayMedia({ video: true })
      peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: stream
      })
    }
    else {
      peer = new SimplePeer()
    }

    return peer
  }
}
