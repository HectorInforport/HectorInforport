import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

// Import Cdk Drag & Drop
import {
  CdkDragDrop,
  CdkDragEnd,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// Import the resized event model
import { ResizeEvent } from 'angular-resizable-element';
import { ResizableModule } from 'angular-resizable-element';

// Import RXJS
import { fromEvent } from 'rxjs';
import { mapTo, map, filter, tap } from 'rxjs/operators';

// Import constants
import { HOURS } from '../utils/hours';
import { VESSELS } from '../utils/vessels';

@Component({
  selector: 'app-css-grid-days',
  templateUrl: './css-grid-days.component.html',
  styleUrls: ['./css-grid-days.component.css'],
})
export class CssGridDaysComponent implements OnInit {
  @ViewChild('item', { static: true }) item: ElementRef;

  initialPosition = { x: 100, y: 100 };
  position = { ...this.initialPosition };
  offset = { x: 0, y: 0 };

  dragPosition = { x: 0, y: 0 };

  // GRID STRUCTURE
  meters = Array(15).fill(0);
  tres = Array(3).fill(0);
  container = Array(345).fill(0);
  dayContainer = Array(23).fill(0);
  tramos = Array(7).fill(0);

  today = [{ dia: 'Monday', fecha: '06/04/2020' }];

  // Testing
  // width: any = 100;
  // height: any = 50;
  // width2: any = 100;
  // height2: any = 300;
  horaNueva = new Date();
  timePeriods = ['BRA', 'IRA', 'MIA', 'EMP', 'LNC'];

  // Import Constants
  hours = HOURS;
  vessels = VESSELS;

  // Drag & Resize Elements
  x: number;
  y: number;
  px: number;
  py: number;
  width: number;
  height: number;
  minArea: number;
  draggingCorner: boolean;
  draggingWindow: boolean;
  resizer: any;

  // Connecting sorting
  todo = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];

  done = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];

  constructor() {
    this.x = 480;
    this.y = 233;
    this.px = 0;
    this.py = 0;
    this.width = 63;
    this.height = 37;
    this.draggingCorner = false;
    this.draggingWindow = false;
    this.minArea = 20000;
  }

  ngOnInit() {
    // console.log('today dia', this.today[0].dia);
    // console.log(this.horaNueva.getHours());
    //  FOR LOOP
    /*     for (let i = 0; i < this.vessels.length; i++) {
    for (let vessel of this.vessels) {
      console.log(vessel.name);
    } */
    // EVENT ACTIONS
    // Click Event with ID
    /*     const actionBtn = document.getElementById('hector-1');
    const source = fromEvent(actionBtn, 'click');
    source.subscribe((evt: any) => {
      window.alert('hi!');
      console.log('evento', evt);
      console.log('evento', evt.clientX);
    });
 */
    // Click Event
    /*    fromEvent(document, 'click').subscribe((evt: any) => {
      window.alert('hi!' + evt.target.title + evt.target.id);
      console.log('click', evt);
      console.log(evt.x, evt.y);
    });
 */
    // DRAG EVENT ( drag, drop & dragenter)
    /*   fromEvent(document, 'drag').subscribe((evt: any) => {
      console.log('DRAG');
      console.log(evt.x, evt.y);
    }); */
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   console.log('DROP', event);
  //   // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }

  // DRAG & DROP CONNECTING SORTING
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event);

  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  newDiv() {
    const nuevo = {
      name: 'NEW',
      day: 1,
      title: 'NEW',
      start: 20,
      end: 23,
      size: 1000,
      orientation: 'undefined',
      width: 65,
      heigth: 60,
      color: 'purple',
      dragPosition: { x: 317, y: 239 },
      offsetTop: 0,
      offsetLeft: 0,
    };
    this.vessels.push(nuevo);
  }

  changePosition(position: any) {
    const numero = Math.random() * 20;
    console.log('numero', numero);

    console.log('disparando change position');
    console.log(this.vessels[position].dragPosition);
    this.vessels[position].dragPosition = {
      x: this.vessels[position].dragPosition.x + numero,
      y: this.vessels[position].dragPosition.y + numero,
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

  onDragStart(event) {
    // console.log(event);
    console.log('EVENTOOOOO');
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundCOlor = 'yellow';
  }

  dameDatos(position: any) {
    console.log('DAME DATOS');
    console.log('antes', this.vessels[position].offsetTop);
    console.log('antes', this.vessels[position].offsetLeft);
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    // this.height = event.rectangle.height;
    this.height = event.rectangle.height;
    this.width = event.rectangle.width;
  }
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

  /** Drag & Resize elements */
  area() {
    return this.width * this.height;
  }

  onWindowPress(event: MouseEvent) {
    console.log('onWindowPress', event);
    this.draggingWindow = true;
    this.px = event.clientX;
    this.py = event.clientY;
  }

  onWindowDrag(event: MouseEvent) {
    // console.log('onWindowDrag', event);
    if (!this.draggingWindow) {
      return;
    }
    let offsetX = event.clientX - this.px;
    let offsetY = event.clientY - this.py;

    this.x += offsetX;
    this.y += offsetY;
    this.px = event.clientX;
    this.py = event.clientY;
  }

  topLeftResize(offsetX: number, offsetY: number) {
    this.x += offsetX;
    this.y += offsetY;
    this.width -= offsetX;
    this.height -= offsetY;
  }

  topRightResize(offsetX: number, offsetY: number) {
    this.y += offsetY;
    this.width += offsetX;
    this.height -= offsetY;
  }

  bottomLeftResize(offsetX: number, offsetY: number) {
    this.x += offsetX;
    this.width -= offsetX;
    this.height += offsetY;
  }

  bottomRightResize(offsetX: number, offsetY: number) {
    this.width += offsetX;
    this.height += offsetY;
  }

  onCornerClick(event: MouseEvent, resizer?: Function) {
    this.draggingCorner = true;
    this.px = event.clientX;
    this.py = event.clientY;
    this.resizer = resizer;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:mousemove', ['$event'])
  onCornerMove(event: MouseEvent) {
    if (!this.draggingCorner) {
      return;
    }
    let offsetX = event.clientX - this.px;
    let offsetY = event.clientY - this.py;

    let lastX = this.x;
    let lastY = this.y;
    let pWidth = this.width;
    let pHeight = this.height;

    this.resizer(offsetX, offsetY);
    if (this.area() < this.minArea) {
      this.x = lastX;
      this.y = lastY;
      this.width = pWidth;
      this.height = pHeight;
    }
    this.px = event.clientX;
    this.py = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onCornerRelease(event: MouseEvent) {
    this.draggingWindow = false;
    this.draggingCorner = false;
  }
}
