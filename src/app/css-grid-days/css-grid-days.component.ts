import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  width: any = 100;
  height: any = 50;
  width2: any = 100;
  height2: any = 300;
  horaNueva = new Date();
  timePeriods = ['BRA', 'IRA', 'MIA', 'EMP', 'LNC'];

  // Import Constants
  hours = HOURS;
  vessels = VESSELS;

  constructor() {}

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

  drop(event: CdkDragDrop<string[]>) {
    console.log('DROP', event);
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

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
}
