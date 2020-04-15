import { Component, OnInit } from '@angular/core';

// Import constants
import { HOURS } from '../../utils/hours';
import { VESSELS } from '../../utils/vessels';

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

  today = [{ dia: 'Monday', fecha: '06/04/2020' }];

  // Import Constants
  hours = HOURS;
  vessels = VESSELS;

  constructor() {}

  ngOnInit() {}

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
}
