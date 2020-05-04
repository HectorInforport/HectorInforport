import { Injectable } from '@angular/core';
import { VESSELS } from '../../utils/vessels';

@Injectable({
  providedIn: 'root'
})
export class MovimentsService {
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
  /******* END BUTTONS MOVEMENTS ******/

  /******* BUTTONS SIZE ***************/
  // moreWidth(position: any) {
  //   if (this.vessels[position].gridColumnEnd < this.gridColumnEnd) {
  //     this.vessels[position].gridColumnEnd += 1;
  //   } else if (
  //     this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
  //     this.vessels[position].gridColumnStart > this.gridColumnStart
  //   ) {
  //     window.alert('Move the ship to the left to take up more space');
  //   } else if (
  //     this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
  //     this.vessels[position].gridColumnStart >= this.gridColumnStart
  //   ) {
  //     window.alert('you can take up no more space on the dock');
  //   }
  // }

  // lessWidth(position: any) {
  //   console.log('start: ' + this.vessels[position].gridColumnStart + ' end: ' + this.vessels[position].gridColumnEnd);
  //   if (
  //     this.vessels[position].gridColumnStart >= this.gridColumnStart &&
  //     this.vessels[position].gridColumnEnd > this.vessels[position].gridColumnStart + 1
  //   ) {
  //     this.vessels[position].gridColumnEnd -= 1;
  //   }
  // }

  // moreHeight(position: any) {
  //   if (this.vessels[position].gridRowStart > this.gridRowStart) {
  //     this.vessels[position].gridRowStart -= 1;
  //     console.log('start: ' + this.vessels[position].gridRowStart + ' end: ' + this.vessels[position].gridRowEnd);
  //   } else if (this.vessels[position].gridRowStart <= 2 && this.vessels[position].gridRowEnd < 25) {
  //     window.alert('if you want to increase the hours, position the boat first at the time of departure');
  //   } else if (this.vessels[position].gridRowStart === 2 && this.vessels[position].gridRowEnd === 25) {
  //     window.alert('can no longer select more hours today');
  //   }
  // }

  // lessHeight(position: any) {
  //   if (this.vessels[position].gridRowStart < this.vessels[position].gridRowEnd - 1) {
  //     this.vessels[position].gridRowStart += 1;
  //   }
  // }

  /******* END BUTTONS SIZE ***************/
}
