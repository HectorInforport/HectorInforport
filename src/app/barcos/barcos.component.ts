import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit {
  // Tramos Horarios
  horas = Array(6).fill(0);
  // Norayts
  norayts = Array(29).fill(0);

  // cols
  cols = Array(29).fill(0);
  // rows
  rows = Array(21).fill(0);
  dias = [
    { dia: 'Lunes', number: '1' },
    { dia: 'Martes', number: '2' },
    { dia: 'Miercoles', number: '3' },
    { dia: 'Jueves', number: '4' },
    { dia: 'Viernes', number: '5' },
    { dia: 'Sábado', number: '6' },
    { dia: 'Domingo', number: '7' }
  ];

  timePeriods = ['Bronze age', 'Iron age', 'Middle ages', 'Early modern period', 'Long nineteenth century'];

  /** Posicion Inicial */
  // dragPosition = { x: 225, y: -775 };
  dragPosition = { x: 200, y: 0 };

  /** Posicion Final */

  // dragPosition = { x: 1000, y: -775 };

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    console.log('DRAGANDO', event);
    // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    console.log('EVENT', event);
    console.log('PREVIOUS', event.previousIndex);
    console.log('CURRENT', event.currentIndex);
    console.log('DISTANCE x', event.distance.x);
    console.log('DISTANCE y', event.distance.y);
    console.log('OFFSET PARENT:', event.previousContainer.element.nativeElement.offsetParent);
    console.log('OFFSET PARENT:', event.previousContainer.element.nativeElement.offsetTop);
    console.log('OFFSET PARENT:', event.previousContainer.element.nativeElement.offsetLeft);
    console.log('OFFSET PARENT:', event.previousContainer.element.nativeElement.offsetHeight);

    console.log(event.previousContainer.data);
    console.log(event.container.data);
  }

  changePositionX(numero: number) {
    this.dragPosition = {
      x: this.dragPosition.x + numero,
      y: this.dragPosition.y
    };
  }

  changePositionY(numero: number) {
    console.log((this.dragPosition.y += numero));
    console.log(this.dragPosition);
    this.dragPosition = {
      x: this.dragPosition.x,
      y: this.dragPosition.y + numero
    };
  }
}
