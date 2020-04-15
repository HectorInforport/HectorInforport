import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRowComponent } from './col-row.component';

describe('ColRowComponent', () => {
  let component: ColRowComponent;
  let fixture: ComponentFixture<ColRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
