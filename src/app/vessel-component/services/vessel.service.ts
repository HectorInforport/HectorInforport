import { Injectable } from '@angular/core';
import { VESSELS } from '../../utils/vessels';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, getHours } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class VesselService {
  vessels = VESSELS;
  constructor() {}
  deleteEvent(position: any, array: any) {
    array.splice(position, 1);
  }

  addEvent(): void {
    this.vessels.push({
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
    });
  }
}
