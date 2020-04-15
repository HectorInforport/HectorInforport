import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropResizeComponent } from './drag-drop-resize.component';

describe('DragDropResizeComponent', () => {
  let component: DragDropResizeComponent;
  let fixture: ComponentFixture<DragDropResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
