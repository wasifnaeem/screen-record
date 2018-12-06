import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealScreenRecorderComponent } from './real-screen-recorder.component';

describe('RealScreenRecorderComponent', () => {
  let component: RealScreenRecorderComponent;
  let fixture: ComponentFixture<RealScreenRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealScreenRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealScreenRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
