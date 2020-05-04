import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayOftheWeekService {
  dayOftheWeek: string;
  language: string;
  constructor() {}

  getDayOftheWeek(day: number, language: string) {
    if (language === 'EN') {
      switch (day) {
        case 0:
          this.dayOftheWeek = 'SUNDAY';
          break;
        case 1:
          this.dayOftheWeek = 'MONDAY';
          break;
        case 2:
          this.dayOftheWeek = 'TUENSDAY';
          break;
        case 3:
          this.dayOftheWeek = 'WEDNESDAY';
          break;
        case 4:
          this.dayOftheWeek = 'THURSDAY';
          break;
        case 5:
          this.dayOftheWeek = 'FRIDAY';
          break;
        case 6:
          this.dayOftheWeek = 'SATURDAY';
          break;
        default:
          console.log('Day Error');
      }
      console.log(this.dayOftheWeek);
    } else if (language === 'ES') {
      switch (day) {
        case 0:
          this.dayOftheWeek = 'DOMINGO';
          break;
        case 1:
          this.dayOftheWeek = 'LUNES';
          break;
        case 2:
          this.dayOftheWeek = 'MARTES';
          break;
        case 3:
          this.dayOftheWeek = 'MIERCOLES';
          break;
        case 4:
          this.dayOftheWeek = 'JUEVES';
          break;
        case 5:
          this.dayOftheWeek = 'VIERNES';
          break;
        case 6:
          this.dayOftheWeek = 'SABADO';
          break;
        default:
          console.log('Error en el día');
      }
    }
  }
}
