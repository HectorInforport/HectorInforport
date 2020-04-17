import { Component, OnInit } from '@angular/core';

// Import constants
import { HOURS } from '../../utils/hours';
import { VESSELS } from '../../utils/vessels';

// Import Cdk Drag & Drop
import {
  CdkDragDrop,
  CdkDragEnd,
  CdkDragStart,
  CdkDragMove,
} from '@angular/cdk/drag-drop';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  getHours,
} from 'date-fns';

import { Subject } from 'rxjs';
import { ICONS } from '../../utils/icons';

@Component({
  selector: 'app-col-row',
  templateUrl: './col-row.component.html',
  styleUrls: ['./col-row.component.css'],
})
export class ColRowComponent implements OnInit {
  // GRID STRUCTURE
  meters = Array(15).fill(0);
  container = Array(345).fill(0);
  dayContainer = Array(23).fill(0);
  tramos = Array(7).fill(0);

  // ICONS
  icons = ICONS;

  refresh: Subject<any> = new Subject();

  today = [{ dia: 'Monday', fecha: '06/04/2020' }];

  // Import Constants
  hours = HOURS;
  vessels = VESSELS;

  dragPosition = { x: 581, y: -322 };

  constructor() {}

  ngOnInit() {}

  dragEnd(event: CdkDragEnd, position?: any) {
    // console.log('DRAG END', event);
    // console.log('position:' + position);
    // console.log(' X: ' + event.distance.x + ' Y: ' + event.distance.y);
    // console.log(
    //   ' Offset Top(Y): ' +
    //     event.source.element.nativeElement.offsetTop +
    //     ' Offset Left(X): ' +
    //     event.source.element.nativeElement.offsetLeft
    // );
    // const posicionX =
    //   event.source.element.nativeElement.offsetLeft + event.distance.x;
    // const posicionY =
    //   event.source.element.nativeElement.offsetHeight + event.distance.y;
    // console.log(`posición actual ' + '{ X: ${posicionX}, Y: ${posicionY} `);
    // console.log('GET FREE DRAG POSITION' + event.source.getFreeDragPosition());
  }
  dragMove(event: CdkDragMove): void {
    // console.log('drag move', event);
  }

  dragStarted(event: CdkDragStart, position: any): void {
    console.log(position);
    console.log('drag start', event);
  }

  onDragEnded(event: CdkDragEnd): void {
    console.log(event.source.getFreeDragPosition()); // returns { x: 0, y: 0 }
  }

  // changePosition(position: any) {
  //   console.log(this.vessels[position].gridColumnStart);
  //   console.log(this.vessels[position].gridColumnEnd);
  //   console.log(this.vessels[position].gridRowStart);
  //   console.log(this.vessels[position].gridRowEnd);
  //   this.vessels[position].gridColumnStart += 1;
  //   this.vessels[position].gridColumnEnd += 1;
  // }

  /** CHANGE POSITION ON AXIS Y */
  moveDown(position: any) {
    if (this.vessels[position].gridRowEnd < 25) {
      this.vessels[position].gridRowStart += 1;
      this.vessels[position].gridRowEnd += 1;
    }
  }

  moveUp(position: any) {
    if (this.vessels[position].gridRowStart > 2) {
      this.vessels[position].gridRowStart -= 1;
      this.vessels[position].gridRowEnd -= 1;
    }
  }

  /** CHANGE POSITION ON AXIS X */

  moveRight(position: any) {
    if (this.vessels[position].gridColumnEnd < 18) {
      this.vessels[position].gridColumnStart += 1;
      this.vessels[position].gridColumnEnd += 1;
    }
  }

  moveLeft(position: any) {
    if (this.vessels[position].gridColumnStart > 3) {
      this.vessels[position].gridColumnStart -= 1;
      this.vessels[position].gridColumnEnd -= 1;
    }
  }

  // MORE WIDTH

  moreWidth(position: any) {
    if (this.vessels[position].gridColumnEnd < 18) {
      this.vessels[position].gridColumnEnd += 1;
    }
  }
  // LESS WIDHT
  lessWidth(position: any) {
    console.log('gridColumnStart:', this.vessels[position].gridColumnStart);
    console.log('gridColumnEnd:', this.vessels[position].gridColumnEnd);
    if (
      this.vessels[position].gridColumnStart >= 3 &&
      this.vessels[position].gridColumnEnd > 4
    ) {
      this.vessels[position].gridColumnEnd -= 1;
    }
  }

  // TODO
  // MORE HEIGHT
  moreHeight(position: any) {
    console.log('entramos en more height');
    if (this.vessels[position].gridRowStart > 2) {
      console.log('es menor');
      this.vessels[position].gridRowStart -= 1;
    }

    console.log(
      'AHORA: ' +
        'Row start: ' +
        this.vessels[position].gridRowStart +
        ' ' +
        'Row End: ' +
        this.vessels[position].gridRowEnd
    );
  }

  // TODO
  // LESS HEIGHT
  lessHeight(position: any) {
    console.log('entramos en less height');
    if (
      this.vessels[position].gridRowStart <
      this.vessels[position].gridRowEnd - 1
    ) {
      console.log('es menor');
      this.vessels[position].gridRowStart += 1;
    }

    console.log(
      'AHORA: ' +
        'Row start: ' +
        this.vessels[position].gridRowStart +
        ' ' +
        'Row End: ' +
        this.vessels[position].gridRowEnd
    );
  }

  numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  deleteEvent(position: any) {
    this.vessels.splice(position, 1);
  }

  addEvent(): void {
    this.vessels = [
      ...this.vessels,
      {
        name: 'NUEVO',
        day: 1,
        title: 'MIA GERMANY',
        start: addHours(startOfDay(new Date()), 2),
        end: addHours(new Date(), 2),
        size: 1000,
        orientation: 'izq',
        width: 65,
        heigth: 36,
        bow: false,
        color: '#FFF6C4',
        border: '#806C00',
        dragPosition: { x: 0, y: 70 },
        offsetTop: 0,
        offsetLeft: 0,
        gridRowStart: 20,
        gridRowEnd: 22,
        gridColumnStart: 15,
        gridColumnEnd: 18,
      },
    ];
  }
}

// drop(event: CdkDragDrop<string[]>) {
//   console.log('DRAG DROP', event);
// }

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
