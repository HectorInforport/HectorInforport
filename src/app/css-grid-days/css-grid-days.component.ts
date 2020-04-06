import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';
@Component({
  selector: 'app-css-grid-days',
  templateUrl: './css-grid-days.component.html',
  styleUrls: ['./css-grid-days.component.css'],
})
export class CssGridDaysComponent implements OnInit {
  meters = Array(15).fill(0);
  today = [{ dia: 'Lunes', fecha: '06/04/2020' }];
  width: number;
  height: number;

  // days = Array(7).fill(0);
  tres = Array(3).fill(0);

  horaNueva = new Date();

  days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  hours = [
    '00:00 - 01:00',
    '01:00 - 02:00',
    '02:00 - 03:00',
    '03:00 - 04:00',
    '04:00 - 05:00',
    '05:00 - 06:00',
    '06:00 - 07:00',
    '07:00 - 08:00',
    '08:00 - 09:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
    '21:00 - 22:00',
    '22:00 - 23:00',
    '23:00 - 24:00',
  ];

  tramos = Array(7).fill(0);
  timePeriods = ['BRA', 'IRA', 'MIA', 'EMP', 'LNC'];

  vessels = [
    {
      name: 'BRA',
      day: 1,
      title: 'BRA GERMANY',
      start: 8,
      end: 14,
      size: 1000,
      orientation: 'izq',
    },
    {
      name: 'IRA',
      day: 1,
      title: 'IRA GERMANY',
      start: 14,
      end: 20,
      size: 1000,
      orientation: 'izq',
    },
    {
      name: 'EMP',
      day: 1,
      title: 'EMP GERMANY',
      start: 20,
      end: 23,
      size: 1000,
      orientation: 'izq',
    },
    {
      name: 'MIA',
      day: 1,
      title: 'MIA GERMANY',
      start: 20,
      end: 23,
      size: 1000,
      orientation: 'izq',
    },
    {
      name: 'MIA2',
      day: 1,
      title: 'MIA GERMANY',
      start: 8,
      end: 23,
      size: 1000,
      orientation: 'izq',
    },
  ];

  vessel1 = [];
  vessel2 = [];
  vessel3 = [];

  constructor() {}

  ngOnInit() {
    console.log('today dia', this.today[0].dia);
    console.log(this.horaNueva.getHours());

    for (let i = 0; i < this.vessels.length; i++) {
      console.log('ENTRANDO AL FOR');

      if (this.vessels[i].start >= 8 && this.vessels[i].end <= 23) {
        if (this.vessels[i].start >= 8 && this.vessels[i].end <= 20) {
          if (this.vessels[i].start === 14 && this.vessels[i].end === 20) {
            this.vessel2.push(this.vessels[i]);
          }

          if (this.vessels[i].start >= 8 && this.vessels[i].end <= 14) {
            // console.log(this.vessels[i].name);
            this.vessel1.push(this.vessels[i]);
          }
        } else {
          this.vessel3.push(this.vessels[i]);
        }
      }

      if (this.vessels[i].start === 8 && this.vessels[i].end === 23) {
        this.vessel1.push(this.vessels[i]);
        this.vessel2.push(this.vessels[i]);
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('EVENT', event);
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    moveItemInArray(this.vessel1, event.previousIndex, event.currentIndex);
    moveItemInArray(this.vessel2, event.previousIndex, event.currentIndex);
    moveItemInArray(this.vessel3, event.previousIndex, event.currentIndex);
  }

  onResized(event: ResizedEvent) {
    console.log('EVENT', event);
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
}
