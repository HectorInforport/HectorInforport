import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridDaysComponent } from './css-grid-days.component';

describe('CssGridDaysComponent', () => {
  let component: CssGridDaysComponent;
  let fixture: ComponentFixture<CssGridDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGridDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
