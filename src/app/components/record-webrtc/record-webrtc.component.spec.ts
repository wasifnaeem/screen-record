import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordWebrtcComponent } from './record-webrtc.component';

describe('RecordWebrtcComponent', () => {
  let component: RecordWebrtcComponent;
  let fixture: ComponentFixture<RecordWebrtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordWebrtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordWebrtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
