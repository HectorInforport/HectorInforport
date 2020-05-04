import { Injectable } from '@angular/core';
import { VESSELS } from '../../utils/vessels';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  vessels = VESSELS;
  /**** DEFINE: GRID AND COLUMNS */
  gridColumnStart = 3;
  gridColumnEnd = 18;
  gridRowStart = 2;
  gridRowEnd = 26;

  constructor() {}

  /******* BUTTONS MOVEMENTS ******/
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

  moveRight(position: any) {
    if (this.vessels[position].gridColumnEnd < this.gridColumnEnd) {
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
}
