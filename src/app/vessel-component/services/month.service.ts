import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  month: string;
  language: string;
  constructor() {}

  getMonth(month: number, language: string) {
    if (language === 'EN') {
      switch (month) {
        case 0:
          this.month = 'JANUARY';
          break;
        case 1:
          this.month = 'FEBRUARY';
          break;
        case 2:
          this.month = 'MARCH';
          break;
        case 3:
          this.month = 'APRIL';
          break;
        case 4:
          this.month = 'MAY';
          break;
        case 5:
          this.month = 'JUNE';
          break;
        case 6:
          this.month = 'JULY';
          break;
        case 7:
          this.month = 'AUGUST';
          break;
        case 8:
          this.month = 'SEPTEMBER';
          break;
        case 9:
          this.month = 'OCTOBER';
          break;
        case 10:
          this.month = 'NOVEMBER';
          break;
        case 11:
          this.month = 'DECEMBER';
          break;
        default:
          console.log('Month Error');
      }
      console.log(this.month);
    } else if (language === 'ES') {
      switch (month) {
        case 0:
          this.month = 'ENERO';
          break;
        case 1:
          this.month = 'FEBRERO';
          break;
        case 2:
          this.month = 'MARZO';
          break;
        case 3:
          this.month = 'ABRIL';
          break;
        case 4:
          this.month = 'MAYO';
          break;
        case 5:
          this.month = 'JUNIO';
          break;
        case 6:
          this.month = 'JULIO';
          break;
        case 7:
          this.month = 'AGOSTO';
          break;
        case 8:
          this.month = 'SEPTIEMBRE';
          break;
        case 9:
          this.month = 'OCTUBRE';
          break;
        case 10:
          this.month = 'NOVIEMBRE';
          break;
        case 11:
          this.month = 'DICIEMBRE';
          break;
        default:
          console.log('Month Error');
      }
      console.log(this.month);
    }
  }
}
