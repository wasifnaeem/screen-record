import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDeviceComponent } from './find-device.component';

describe('FindDeviceComponent', () => {
  let component: FindDeviceComponent;
  let fixture: ComponentFixture<FindDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
