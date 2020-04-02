import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit {
  items = [
    { value: '1', disabled: true },
    { value: '2', disabled: true },
    { value: '3', disabled: true },
    { value: '4', disabled: true },
    { value: '5', disabled: true },
    { value: '6', disabled: true },
    { value: '7', disabled: true },
    { value: '8', disabled: true },
    { value: '9', disabled: true },
    { value: '10', disabled: true },
    { value: '11', disabled: true },
    { value: '12', disabled: true },
    { value: '13', disabled: true },
    { value: '14', disabled: true },
    { value: '15', disabled: true },
    { value: '16', disabled: true },
    { value: '17', disabled: true },
    { value: '18', disabled: true },
    { value: '19', disabled: true },
    { value: '20', disabled: true },
    { value: '21', disabled: true },
    { value: '22', disabled: true },
    { value: '23', disabled: true },
    { value: '24', disabled: true },
    { value: '25', disabled: true },
    { value: '26', disabled: true },
    { value: '27', disabled: true },
    { value: '28', disabled: true },
    { value: '29', disabled: true },
    { value: '30', disabled: true }
  ];

  movies = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];

  dias = [
    { dia: 'Lunes', number: '1' },
    { dia: 'Martes', number: '2' },
    { dia: 'Miercoles', number: '3' },
    { dia: 'Jueves', number: '4' },
    { dia: 'Viernes', number: '5' },
    { dia: 'Sábado', number: '6' },
    { dia: 'Domingo', number: '7' }
  ];

  // horas = [
  //   {
  //     tramo1: '08:00 - 14:00',
  //     tramo2: '14:00 - 20:00',
  //     tramo3: '20:00 - 02:00'
  //   }
  // ];

  horas = Array(6).fill(0);

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
