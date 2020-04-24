import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Import Cdk Drag & Drop
import { CdkDragDrop, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';

// Import the resized event model
import { ResizeEvent } from 'angular-resizable-element';
import { ResizableModule } from 'angular-resizable-element';

// Import constants
import { HOURS } from '../../utils/hours';
import { VESSELS } from '../../utils/vessels';

@Component({
  selector: 'app-drag-drop-resize',
  templateUrl: './drag-drop-resize.component.html',
  styleUrls: ['./drag-drop-resize.component.css']
})
export class DragDropResizeComponent implements OnInit {
  @ViewChild('item', { static: true }) item: ElementRef;

  initialPosition = { x: 100, y: 100 };
  position = { ...this.initialPosition };
  offset = { x: 0, y: 0 };

  dragPosition = { x: 0, y: 0 };

  // GRID STRUCTURE
  meters = Array(15).fill(0);
  container = Array(345).fill(0);
  dayContainer = Array(23).fill(0);
  tramos = Array(7).fill(0);

  today = [{ dia: 'Monday', fecha: '06/04/2020' }];

  // Testing
  width: any = 100;
  height: any = 50;

  horaNueva = new Date();

  // Import Constants
  hours = HOURS;
  vessels = VESSELS;

  constructor() {}

  ngOnInit() {}

  // newDiv() {
  //   const nuevo = {
  //     name: 'NEW',
  //     day: 1,
  //     title: 'NEW',
  //     start: 20,
  //     end: 23,
  //     size: 1000,
  //     orientation: 'undefined',
  //     width: 65,
  //     heigth: 60,
  //     color: 'purple',
  //     dragPosition: { x: 317, y: 239 },
  //     offsetTop: 0,
  //     offsetLeft: 0,
  //   };
  //   this.vessels.push(nuevo);
  // }

  changePosition(position: any) {
    const numero = Math.random() * 20;
    console.log('numero', numero);

    console.log('disparando change position');
    console.log(this.vessels[position].dragPosition);
    this.vessels[position].dragPosition = {
      x: this.vessels[position].dragPosition.x + numero,
      y: this.vessels[position].dragPosition.y + numero
    };
  }

  dragEnd(event: CdkDragEnd, position: any) {
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;

    console.log(this.position, this.initialPosition, this.offset);
    this.vessels[position].dragPosition.x = this.position.x;
    this.vessels[position].dragPosition.y = this.position.y;
  }

  onDragStart(event: CdkDragStart) {
    console.log('DRAG START', event);
    // event.dataTransfer.setData('text/plain', event.target.id);
    // event.currentTarget.style.backgroundCOlor = 'yellow';
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    this.height = event.rectangle.height;
    this.width = event.rectangle.width;
  }

  /** DAR TAMAÑO A LOS DIVS */
  plusHeight(position: any, event?: any) {
    if (this.vessels[position].heigth < 780) {
      this.vessels[position].heigth += 36;
    } else {
      this.vessels[position].heigth = 790;
    }
  }

  minisHeight(position: any, event?: any) {
    if (this.vessels[position].heigth > 36) {
      this.vessels[position].heigth -= 36;
    } else {
      this.vessels[position].heigth = 36;
    }
  }

  minusWidth(position: any, event?: any) {
    if (this.vessels[position].width > 65) {
      this.vessels[position].width -= 65;
    } else {
      this.vessels[position].width = 65;
    }
  }

  plusWidth(position: any, event?: any) {
    if (this.vessels[position].width < 890) {
      this.vessels[position].width += 65;
    } else {
      this.vessels[position].width = 930;
    }
  }
}
