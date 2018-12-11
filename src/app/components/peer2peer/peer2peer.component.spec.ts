import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Peer2peerComponent } from './peer2peer.component';

describe('Peer2peerComponent', () => {
  let component: Peer2peerComponent;
  let fixture: ComponentFixture<Peer2peerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Peer2peerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Peer2peerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
