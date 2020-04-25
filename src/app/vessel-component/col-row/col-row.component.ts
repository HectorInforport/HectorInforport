import { Component, OnInit } from '@angular/core';

// Import constants
import { HOURS } from '../../utils/hours';
import { VESSELS } from '../../utils/vessels';

// Import Cdk Drag & Drop
import { CdkDragDrop, CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, getHours } from 'date-fns';

import { Subject } from 'rxjs';
import { ICONS } from '../../utils/icons';

// Import the resized event model
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-col-row',
  templateUrl: './col-row.component.html',
  styleUrls: ['./col-row.component.css']
})
export class ColRowComponent implements OnInit {
  // GRID STRUCTURE
  meters = Array(15).fill(0);
  container = Array(360).fill(0);
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

  // DEFINE GRID ROW AND COLUMNS
  gridColumnStart = 3;
  gridColumnEnd = 18;
  gridRowStart = 2;
  gridRowEnd = 25;

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

  onResizeEnd(event: ResizeEvent, position: any): void {
    console.log('Element was resized', event, position);
    // console.log('Edges', event.edges);
    // console.log(event.edges[0]);
    // console.log('Edges', event.edges.right);
    let right;
    let left;
    let bottom;
    let top;
    let valor;

    if (event.edges.right) {
      console.log('Muevo por la derecha');
      right = event.edges.right;
      console.log(right);

      if (right > 1) {
        console.log('aumento');
        switch (true) {
          case right >= 50 && right <= 90:
            console.log('1', right);
            valor = 1;
            break;
          case right >= 110 && right <= 150:
            console.log('2');
            valor = 2;
            break;
          case right >= 170 && right <= 210:
            console.log('3');
            valor = 3;
            break;
          case right >= 230 && right <= 270:
            console.log('4');
            valor = 4;
            break;
          case right >= 290 && right <= 330:
            console.log('5');
            valor = 5;
            break;
          case right >= 350 && right <= 390:
            console.log('6');
            valor = 6;
            break;
          case right >= 410 && right <= 450:
            console.log('7');
            valor = 7;
            break;
          case right >= 470 && right <= 510:
            console.log('8');
            valor = 8;
            break;
          case right >= 530 && right <= 570:
            console.log('9');
            valor = 9;
            break;
          case right >= 590 && right <= 630:
            console.log('10');
            valor = 10;
            break;
          case right >= 650 && right <= 690:
            console.log('11');
            valor = 11;
            break;
          case right >= 710 && right <= 750:
            console.log('12');
            valor = 12;
            break;
          case right >= 770 && right <= 810:
            console.log('13');
            valor = 13;
            break;
          case right >= 830 && right <= 870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }
        this.moreWidthResizeByRight(position, valor);
      } else {
        console.log('disminuyo');
        switch (true) {
          case right <= -50 && right >= -90:
            console.log('1', left);
            valor = 1;
            break;
          case right <= -110 && right >= -150:
            console.log('2');
            valor = 2;
            break;
          case right <= -170 && right >= -210:
            console.log('3');
            valor = 3;
            break;
          case right <= -230 && right >= -270:
            console.log('4');
            valor = 4;
            break;
          case right <= -290 && right >= -330:
            console.log('5');
            valor = 5;
            break;
          case right <= -350 && right >= -390:
            console.log('6');
            valor = 6;
            break;
          case right <= -410 && right >= -450:
            console.log('7');
            valor = 7;
            break;
          case right <= -470 && right >= -510:
            console.log('8');
            valor = 8;
            break;
          case right <= -530 && right >= -570:
            console.log('9');
            valor = 9;
            break;
          case right <= -590 && right >= -630:
            console.log('10');
            valor = 10;
            break;
          case right <= -650 && right >= -690:
            console.log('11');
            valor = 11;
            break;
          case right <= -574 && right >= -629:
            console.log('12');
            valor = 12;
            break;
          case right <= -710 && right >= -750:
            console.log('13');
            valor = 13;
            break;
          case right <= -830 && right >= -870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }
        this.lessWidthResizeByRight(position, valor);
      }
    }

    if (event.edges.left) {
      console.log('Muevo por la izquierda');
      left = event.edges.left;
      console.log(left);

      if (left > 1) {
        console.log('mayor', left);
        switch (true) {
          case left >= 50 && left <= 90:
            console.log('1', left);
            valor = 1;
            break;
          case left >= 110 && left <= 150:
            console.log('2');
            valor = 2;
            break;
          case left >= 170 && left <= 210:
            console.log('3');
            valor = 3;
            break;
          case left >= 230 && left <= 270:
            console.log('4');
            valor = 4;
            break;
          case left >= 290 && left <= 330:
            console.log('5');
            valor = 5;
            break;
          case left >= 350 && left <= 390:
            console.log('6');
            valor = 6;
            break;
          case left >= 410 && left <= 450:
            console.log('7');
            valor = 7;
            break;
          case left >= 470 && left <= 510:
            console.log('8');
            valor = 8;
            break;
          case left >= 530 && left <= 570:
            console.log('9');
            valor = 9;
            break;
          case left >= 590 && left <= 630:
            console.log('10');
            valor = 10;
            break;
          case left >= 650 && left <= 690:
            console.log('11');
            valor = 11;
            break;
          case left >= 710 && left <= 750:
            console.log('12');
            valor = 12;
            break;
          case left >= 770 && left <= 810:
            console.log('13');
            valor = 13;
            break;
          case left >= 830 && left <= 870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }
        this.lessWidthResizeByLeft(position, valor);
      } else {
        console.log('menor');
        switch (true) {
          case left <= -50 && left >= -90:
            console.log('1', left);
            valor = 1;
            break;
          case left <= -110 && left >= -150:
            console.log('2');
            valor = 2;
            break;
          case left <= -170 && left >= -210:
            console.log('3');
            valor = 3;
            break;
          case left <= -230 && left >= -270:
            console.log('4');
            valor = 4;
            break;
          case right <= -290 && right >= -330:
            console.log('5');
            valor = 5;
            break;
          case left <= -350 && left >= -390:
            console.log('6');
            valor = 6;
            break;
          case left <= -410 && left >= -450:
            console.log('7');
            valor = 7;
            break;
          case left <= -470 && left >= -510:
            console.log('8');
            valor = 8;
            break;
          case left <= -530 && left >= -570:
            console.log('9');
            valor = 9;
            break;
          case left <= -590 && left >= -630:
            console.log('10');
            valor = 10;
            break;
          case left <= -650 && left >= -690:
            console.log('11');
            valor = 11;
            break;
          case left <= -574 && left >= -629:
            console.log('12');
            valor = 12;
            break;
          case left <= -710 && left >= -750:
            console.log('13');
            valor = 13;
            break;
          case left <= -830 && left >= -870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }

        console.log(valor);
        this.moreWidthResizeByLeft(position, valor);
      }
    }

    if (event.edges.bottom) {
      console.log('Muevo de  abajo');
      bottom = event.edges.bottom;
      console.log(bottom);

      switch (true) {
        case bottom >= 15 && bottom <= 40:
          console.log('1', bottom);
          valor = 1;
          break;
        case bottom >= 40 && bottom <= 65:
          console.log('2', bottom);
          valor = 2;
          break;
        case bottom >= 65 && bottom <= 90:
          console.log('3', bottom);
          valor = 3;
          break;
        case bottom >= 90 && bottom <= 115:
          console.log('4', bottom);
          valor = 4;
          break;
        case bottom >= 115 && bottom <= 140:
          console.log('5', bottom);
          valor = 5;
          break;
        case bottom >= 140 && bottom <= 165:
          console.log('6', bottom);
          valor = 6;
          break;
        case bottom >= 165 && bottom <= 190:
          console.log('7', bottom);
          valor = 7;
          break;
        case bottom >= 190 && bottom <= 215:
          console.log('8', bottom);
          valor = 8;
          break;
        case bottom >= 215 && bottom <= 240:
          console.log('9', right);
          valor = 9;
          break;
        case bottom >= 240 && bottom <= 265:
          console.log('10', bottom);
          valor = 10;
          break;
        case bottom >= 265 && bottom <= 290:
          console.log('11', bottom);
          valor = 11;
          break;
        case bottom >= 290 && bottom <= 315:
          console.log('12', bottom);
          valor = 12;
          break;
        case bottom >= 315 && bottom <= 340:
          console.log('13', bottom);
          valor = 13;
          break;
        case bottom >= 340 && bottom <= 365:
          console.log('14', bottom);
          valor = 14;
          break;
        case bottom >= 365 && bottom <= 390:
          console.log('15', bottom);
          valor = 15;
          break;
        case bottom >= 390 && bottom <= 415:
          console.log('16', bottom);
          valor = 16;
          break;
        case bottom >= 415 && bottom <= 440:
          console.log('17', bottom);
          valor = 17;
          break;
        case bottom >= 440 && bottom <= 465:
          console.log('18', bottom);
          valor = 18;
          break;
        case bottom >= 465 && bottom <= 490:
          console.log('19', bottom);
          valor = 19;
          break;
        case bottom >= 490 && bottom <= 515:
          console.log('20', bottom);
          valor = 20;
          break;
        case bottom >= 515 && bottom <= 540:
          console.log('21', bottom);
          valor = 21;
          break;
        case bottom >= 540 && bottom <= 565:
          console.log('22', bottom);
          valor = 22;
          break;
        case bottom >= 565 && bottom <= 590:
          console.log('23', bottom);
          valor = 23;
          break;
        default:
          valor = 0;
      }
    }

    if (event.edges.top) {
      console.log('Arrastra de arriba');
      top = event.edges.top;
      console.log(top);
    }

    const arrayItems = [{ arriba: 1, abajo: 2, derecha: 3, izquierda: 4 }];

    // this.height = event.rectangle.height;
    // this.height = event.rectangle.height;
    // this.width = event.rectangle.width;
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
    if (this.vessels[position].gridRowEnd < this.gridRowEnd) {
      this.vessels[position].gridRowStart += 1;
      this.vessels[position].gridRowEnd += 1;
    }
  }

  moveUp(position: any) {
    if (this.vessels[position].gridRowStart > this.gridRowStart) {
      this.vessels[position].gridRowStart -= 1;
      this.vessels[position].gridRowEnd -= 1;
    }
  }

  /** RESIZE MOVIMENTS */
  /** MORE WIDTH RESIZE BY RIGHT */
  moreWidthResizeByRight(position: any, valor: number) {
    if (this.vessels[position].gridColumnEnd < this.gridColumnEnd) {
      this.vessels[position].gridColumnEnd += valor;
    } else if (
      this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
      this.vessels[position].gridColumnStart > this.gridColumnStart
    ) {
      window.alert('Move the ship to the left to take up more space');
    } else if (
      this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
      this.vessels[position].gridColumnStart >= this.gridColumnStart
    ) {
      window.alert('you can take up no more space on the dock');
    }
  }
  /** END MORE WIDTH RESIZE BY RIGHT */

  /** LESS WIDTH RESIZE BY RIGHT */
  lessWidthResizeByRight(position: any, valor: number) {
    console.log('start: ' + this.vessels[position].gridColumnStart + ' end: ' + this.vessels[position].gridColumnEnd);
    if (
      this.vessels[position].gridColumnStart >= this.gridColumnStart &&
      this.vessels[position].gridColumnEnd > this.vessels[position].gridColumnStart + 1
    ) {
      this.vessels[position].gridColumnEnd -= valor;
    }
  }
  /** END WIDTH RESIZE BY RIGHT */

  /** MORE WIDTH RESIZE BY LEFT */
  moreWidthResizeByLeft(position: any, valor: number) {
    console.log('moreWidthResizeByLeft');
    console.log('start:', this.vessels[position].gridColumnStart);
    console.log('end:', this.vessels[position].gridColumnEnd);
    if (this.vessels[position].gridColumnStart > this.gridColumnStart) {
      this.vessels[position].gridColumnStart -= valor;
    }

    console.log('start:', this.vessels[position].gridColumnStart);
    console.log('end:', this.vessels[position].gridColumnEnd);
  }
  /** MORE WIDTH RESIZE BY LEFT */

  /** LESS WIDTH RESIZE BY LEFT */
  lessWidthResizeByLeft(position: any, valor: number) {
    console.log('lessWidthResizeByLeft' + ' valor ' + valor);
    console.log('start: ', this.vessels[position].gridColumnStart + ' end:' + this.vessels[position].gridColumnEnd);
    if (this.vessels[position].gridColumnStart < this.vessels[position].gridColumnEnd) {
      console.log('es menor');
      this.vessels[position].gridColumnStart += valor;
      console.log('start: ', this.vessels[position].gridColumnStart + ' end:' + this.vessels[position].gridColumnEnd);
      if (this.vessels[position].gridColumnStart === this.vessels[position].gridColumnEnd) {
        this.vessels[position].gridColumnStart = this.vessels[position].gridColumnEnd - 1;
      }
    }

    console.log('start:', this.vessels[position].gridColumnStart);
    console.log('end:', this.vessels[position].gridColumnEnd);
  }
  /** LESS WIDTH RESIZE BY LEFT */

  /** END RESIZE MOVIMENTS */

  /** CHANGE POSITION ON AXIS X */
  // MORE WIDTH
  moveRight(position: any) {
    if (this.vessels[position].gridColumnEnd < this.gridRowEnd) {
      this.vessels[position].gridColumnStart += 1;
      this.vessels[position].gridColumnEnd += 1;
    }
  }
  moveLeft(position: any) {
    if (this.vessels[position].gridColumnStart > this.gridColumnStart) {
      this.vessels[position].gridColumnStart -= 1;
      this.vessels[position].gridColumnEnd -= 1;
    }
  }

  // MORE WIDTH

  moreWidth(position: any) {
    if (this.vessels[position].gridColumnEnd < this.gridColumnEnd) {
      this.vessels[position].gridColumnEnd += 1;
    } else if (
      this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
      this.vessels[position].gridColumnStart > this.gridColumnStart
    ) {
      window.alert('Move the ship to the left to take up more space');
    } else if (
      this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
      this.vessels[position].gridColumnStart >= this.gridColumnStart
    ) {
      window.alert('you can take up no more space on the dock');
    }
  }
  // LESS WIDHT
  lessWidth(position: any) {
    console.log('start: ' + this.vessels[position].gridColumnStart + ' end: ' + this.vessels[position].gridColumnEnd);
    if (
      this.vessels[position].gridColumnStart >= this.gridColumnStart &&
      this.vessels[position].gridColumnEnd > this.vessels[position].gridColumnStart + 1
    ) {
      this.vessels[position].gridColumnEnd -= 1;
    }
  }

  // MORE HEIGHT
  moreHeight(position: any) {
    if (this.vessels[position].gridRowStart > this.gridRowStart) {
      this.vessels[position].gridRowStart -= 1;
      console.log('start: ' + this.vessels[position].gridRowStart + ' end: ' + this.vessels[position].gridRowEnd);
    } else if (this.vessels[position].gridRowStart <= 2 && this.vessels[position].gridRowEnd < 25) {
      window.alert('if you want to increase the hours, position the boat first at the time of departure');
    } else if (this.vessels[position].gridRowStart === 2 && this.vessels[position].gridRowEnd === 25) {
      window.alert('can no longer select more hours today');
    }
  }

  // LESS HEIGHT
  lessHeight(position: any) {
    if (this.vessels[position].gridRowStart < this.vessels[position].gridRowEnd - 1) {
      this.vessels[position].gridRowStart += 1;
    }
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
        gridColumnEnd: 18
      }
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
