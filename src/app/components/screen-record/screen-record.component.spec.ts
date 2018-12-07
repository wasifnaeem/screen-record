import { async, ComponentFixture, TestBed } from '@angular/core/';

import { ScreenRecordComponent } from './screen-record.component';

describe('ScreenRecordComponent', () => {
  let component: ScreenRecordComponent;
  let fixture: ComponentFixture<ScreenRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
