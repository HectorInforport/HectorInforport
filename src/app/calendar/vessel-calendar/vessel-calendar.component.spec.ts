import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselCalendarComponent } from './vessel-calendar.component';

describe('VesselCalendarComponent', () => {
  let component: VesselCalendarComponent;
  let fixture: ComponentFixture<VesselCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
