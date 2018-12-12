import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpPeerComponent } from './simp-peer.component';

describe('SimpPeerComponent', () => {
  let component: SimpPeerComponent;
  let fixture: ComponentFixture<SimpPeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpPeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpPeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
