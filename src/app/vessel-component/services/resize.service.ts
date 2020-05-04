import { Injectable } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { VESSELS } from '../../utils/vessels';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  vessels = VESSELS;
  /**** DEFINE: GRID AND COLUMNS */
  gridColumnStart = 3;
  gridColumnEnd = 18;
  gridRowStart = 2;
  gridRowEnd = 26;
  constructor() {}

  numeroAleatorio(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  onResizeEnd(event: ResizeEvent, position: any): void {
    let right;
    let left;
    let bottom;
    let top;
    let valor;

    console.log('event', event);
    if (event.edges.right) {
      right = event.edges.right;
      if (right > 1) {
        switch (true) {
          case right >= 50 && right <= 90:
            console.log('1', right);
            valor = 1;
            break;
          case right >= 110 && right <= 150:
            console.log('2');
            valor = 2;
            break;
          case right >= 170 && right <= 210:
            console.log('3');
            valor = 3;
            break;
          case right >= 230 && right <= 270:
            console.log('4');
            valor = 4;
            break;
          case right >= 290 && right <= 330:
            console.log('5');
            valor = 5;
            break;
          case right >= 350 && right <= 390:
            console.log('6');
            valor = 6;
            break;
          case right >= 410 && right <= 450:
            console.log('7');
            valor = 7;
            break;
          case right >= 470 && right <= 510:
            console.log('8');
            valor = 8;
            break;
          case right >= 530 && right <= 570:
            console.log('9');
            valor = 9;
            break;
          case right >= 590 && right <= 630:
            console.log('10');
            valor = 10;
            break;
          case right >= 650 && right <= 690:
            console.log('11');
            valor = 11;
            break;
          case right >= 710 && right <= 750:
            console.log('12');
            valor = 12;
            break;
          case right >= 770 && right <= 810:
            console.log('13');
            valor = 13;
            break;
          case right >= 830 && right <= 870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }
        this.moreWidthResizeByRight(position, valor);
      } else {
        switch (true) {
          case right <= -50 && right >= -90:
            console.log('1', left);
            valor = 1;
            break;
          case right <= -110 && right >= -150:
            console.log('2');
            valor = 2;
            break;
          case right <= -170 && right >= -210:
            console.log('3');
            valor = 3;
            break;
          case right <= -230 && right >= -270:
            console.log('4');
            valor = 4;
            break;
          case right <= -290 && right >= -330:
            console.log('5');
            valor = 5;
            break;
          case right <= -350 && right >= -390:
            console.log('6');
            valor = 6;
            break;
          case right <= -410 && right >= -450:
            console.log('7');
            valor = 7;
            break;
          case right <= -470 && right >= -510:
            console.log('8');
            valor = 8;
            break;
          case right <= -530 && right >= -570:
            console.log('9');
            valor = 9;
            break;
          case right <= -590 && right >= -630:
            console.log('10');
            valor = 10;
            break;
          case right <= -650 && right >= -690:
            console.log('11');
            valor = 11;
            break;
          case right <= -574 && right >= -629:
            console.log('12');
            valor = 12;
            break;
          case right <= -710 && right >= -750:
            console.log('13');
            valor = 13;
            break;
          case right <= -830 && right >= -870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }
        this.lessWidthResizeByRight(position, valor);
      }
    }

    if (event.edges.left) {
      left = event.edges.left;
      if (left > 1) {
        switch (true) {
          case left >= 50 && left <= 90:
            console.log('1', left);
            valor = 1;
            break;
          case left >= 110 && left <= 150:
            console.log('2');
            valor = 2;
            break;
          case left >= 170 && left <= 210:
            console.log('3');
            valor = 3;
            break;
          case left >= 230 && left <= 270:
            console.log('4');
            valor = 4;
            break;
          case left >= 290 && left <= 330:
            console.log('5');
            valor = 5;
            break;
          case left >= 350 && left <= 390:
            console.log('6');
            valor = 6;
            break;
          case left >= 410 && left <= 450:
            console.log('7');
            valor = 7;
            break;
          case left >= 470 && left <= 510:
            console.log('8');
            valor = 8;
            break;
          case left >= 530 && left <= 570:
            console.log('9');
            valor = 9;
            break;
          case left >= 590 && left <= 630:
            console.log('10');
            valor = 10;
            break;
          case left >= 650 && left <= 690:
            console.log('11');
            valor = 11;
            break;
          case left >= 710 && left <= 750:
            console.log('12');
            valor = 12;
            break;
          case left >= 770 && left <= 810:
            console.log('13');
            valor = 13;
            break;
          case left >= 830 && left <= 870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }
        this.lessWidthResizeByLeft(position, valor);
      } else {
        switch (true) {
          case left <= -50 && left >= -90:
            console.log('1', left);
            valor = 1;
            break;
          case left <= -110 && left >= -150:
            console.log('2');
            valor = 2;
            break;
          case left <= -170 && left >= -210:
            console.log('3');
            valor = 3;
            break;
          case left <= -230 && left >= -270:
            console.log('4');
            valor = 4;
            break;
          case right <= -290 && right >= -330:
            console.log('5');
            valor = 5;
            break;
          case left <= -350 && left >= -390:
            console.log('6');
            valor = 6;
            break;
          case left <= -410 && left >= -450:
            console.log('7');
            valor = 7;
            break;
          case left <= -470 && left >= -510:
            console.log('8');
            valor = 8;
            break;
          case left <= -530 && left >= -570:
            console.log('9');
            valor = 9;
            break;
          case left <= -590 && left >= -630:
            console.log('10');
            valor = 10;
            break;
          case left <= -650 && left >= -690:
            console.log('11');
            valor = 11;
            break;
          case left <= -574 && left >= -629:
            console.log('12');
            valor = 12;
            break;
          case left <= -710 && left >= -750:
            console.log('13');
            valor = 13;
            break;
          case left <= -830 && left >= -870:
            console.log('14');
            valor = 14;
            break;
          default:
            valor = 0;
            console.log('default');
        }

        console.log(valor);
        this.moreWidthResizeByLeft(position, valor);
      }
    }

    if (event.edges.bottom) {
      bottom = event.edges.bottom;
      if (bottom > 1) {
        switch (true) {
          case bottom >= 15 && bottom <= 40:
            console.log('1', bottom);
            valor = 1;
            break;
          case bottom >= 40 && bottom <= 65:
            console.log('2', bottom);
            valor = 2;
            break;
          case bottom >= 65 && bottom <= 90:
            console.log('3', bottom);
            valor = 3;
            break;
          case bottom >= 90 && bottom <= 115:
            console.log('4', bottom);
            valor = 4;
            break;
          case bottom >= 115 && bottom <= 140:
            console.log('5', bottom);
            valor = 5;
            break;
          case bottom >= 140 && bottom <= 165:
            console.log('6', bottom);
            valor = 6;
            break;
          case bottom >= 165 && bottom <= 190:
            console.log('7', bottom);
            valor = 7;
            break;
          case bottom >= 190 && bottom <= 215:
            console.log('8', bottom);
            valor = 8;
            break;
          case bottom >= 215 && bottom <= 240:
            console.log('9', right);
            valor = 9;
            break;
          case bottom >= 240 && bottom <= 265:
            console.log('10', bottom);
            valor = 10;
            break;
          case bottom >= 265 && bottom <= 290:
            console.log('11', bottom);
            valor = 11;
            break;
          case bottom >= 290 && bottom <= 315:
            console.log('12', bottom);
            valor = 12;
            break;
          case bottom >= 315 && bottom <= 340:
            console.log('13', bottom);
            valor = 13;
            break;
          case bottom >= 340 && bottom <= 365:
            console.log('14', bottom);
            valor = 14;
            break;
          case bottom >= 365 && bottom <= 390:
            console.log('15', bottom);
            valor = 15;
            break;
          case bottom >= 390 && bottom <= 415:
            console.log('16', bottom);
            valor = 16;
            break;
          case bottom >= 415 && bottom <= 440:
            console.log('17', bottom);
            valor = 17;
            break;
          case bottom >= 440 && bottom <= 465:
            console.log('18', bottom);
            valor = 18;
            break;
          case bottom >= 465 && bottom <= 490:
            console.log('19', bottom);
            valor = 19;
            break;
          case bottom >= 490 && bottom <= 515:
            console.log('20', bottom);
            valor = 20;
            break;
          case bottom >= 515 && bottom <= 540:
            console.log('21', bottom);
            valor = 21;
            break;
          case bottom >= 540 && bottom <= 565:
            console.log('22', bottom);
            valor = 22;
            break;
          case bottom >= 565 && bottom <= 590:
            console.log('23', bottom);
            valor = 23;
            break;
          default:
            valor = 0;
        }
        this.moreHeightResizeByBottom(position, valor);
      } else {
        switch (true) {
          case bottom <= -15 && bottom >= -40:
            console.log('1', bottom);
            valor = 1;
            break;
          case bottom <= -40 && bottom >= -65:
            console.log('2', bottom);
            valor = 2;
            break;
          case bottom <= -65 && bottom >= -90:
            console.log('3', bottom);
            valor = 3;
            break;
          case bottom <= -90 && bottom >= -115:
            console.log('4', bottom);
            valor = 4;
            break;
          case bottom <= -115 && bottom >= -140:
            console.log('5', bottom);
            valor = 5;
            break;
          case bottom <= -140 && bottom >= -165:
            console.log('6', bottom);
            valor = 6;
            break;
          case bottom <= -165 && bottom >= -190:
            console.log('7', bottom);
            valor = 7;
            break;
          case bottom <= -190 && bottom >= -215:
            console.log('8', bottom);
            valor = 8;
            break;
          case bottom <= -215 && bottom >= -240:
            console.log('9', right);
            valor = 9;
            break;
          case bottom <= -240 && bottom >= -265:
            console.log('10', bottom);
            valor = 10;
            break;
          case bottom <= -265 && bottom >= -290:
            console.log('11', bottom);
            valor = 11;
            break;
          case bottom <= -290 && bottom >= -315:
            console.log('12', bottom);
            valor = 12;
            break;
          case bottom <= -315 && bottom >= -340:
            console.log('13', bottom);
            valor = 13;
            break;
          case bottom <= -340 && bottom >= -365:
            console.log('14', bottom);
            valor = 14;
            break;
          case bottom <= -365 && bottom >= -390:
            console.log('15', bottom);
            valor = 15;
            break;
          case bottom <= -390 && bottom >= -415:
            console.log('16', bottom);
            valor = 16;
            break;
          case bottom <= -415 && bottom <= -440:
            console.log('17', bottom);
            valor = 17;
            break;
          case bottom <= -440 && bottom >= -465:
            console.log('18', bottom);
            valor = 18;
            break;
          case bottom <= -465 && bottom >= -490:
            console.log('19', bottom);
            valor = 19;
            break;
          case bottom <= -490 && bottom >= -515:
            console.log('20', bottom);
            valor = 20;
            break;
          case bottom <= -515 && bottom >= -540:
            console.log('21', bottom);
            valor = 21;
            break;
          case bottom <= -540 && bottom >= -565:
            console.log('22', bottom);
            valor = 22;
            break;
          case bottom <= -565 && bottom >= -590:
            console.log('23', bottom);
            valor = 23;
            break;
          default:
            valor = 0;
        }
        this.lessHeightResizeByBottom(position, valor);
      }
    }

    if (event.edges.top) {
      top = event.edges.top;
      if (top > 1) {
        switch (true) {
          case top >= 15 && top <= 40:
            console.log('1', top);
            valor = 1;
            break;
          case top >= 40 && bottom <= 65:
            console.log('2', top);
            valor = 2;
            break;
          case top >= 65 && top <= 90:
            console.log('3', top);
            valor = 3;
            break;
          case top >= 90 && top <= 115:
            console.log('4', top);
            valor = 4;
            break;
          case top >= 115 && top <= 140:
            console.log('5', top);
            valor = 5;
            break;
          case top >= 140 && top <= 165:
            console.log('6', top);
            valor = 6;
            break;
          case top >= 165 && top <= 190:
            console.log('7', top);
            valor = 7;
            break;
          case top >= 190 && top <= 215:
            console.log('8', top);
            valor = 8;
            break;
          case top >= 215 && top <= 240:
            console.log('9', right);
            valor = 9;
            break;
          case top >= 240 && top <= 265:
            console.log('10', top);
            valor = 10;
            break;
          case top >= 265 && top <= 290:
            console.log('11', top);
            valor = 11;
            break;
          case top >= 290 && top <= 315:
            console.log('12', top);
            valor = 12;
            break;
          case top >= 315 && top <= 340:
            console.log('13', top);
            valor = 13;
            break;
          case top >= 340 && top <= 365:
            console.log('14', top);
            valor = 14;
            break;
          case top >= 365 && top <= 390:
            console.log('15', top);
            valor = 15;
            break;
          case top >= 390 && top <= 415:
            console.log('16', top);
            valor = 16;
            break;
          case top >= 415 && top <= 440:
            console.log('17', top);
            valor = 17;
            break;
          case top >= 440 && top <= 465:
            console.log('18', top);
            valor = 18;
            break;
          case top >= 465 && top <= 490:
            console.log('19', top);
            valor = 19;
            break;
          case top >= 490 && top <= 515:
            console.log('20', top);
            valor = 20;
            break;
          case top >= 515 && top <= 540:
            console.log('21', top);
            valor = 21;
            break;
          case top >= 540 && top <= 565:
            console.log('22', top);
            valor = 22;
            break;
          case top >= 565 && top <= 590:
            console.log('23', top);
            valor = 23;
            break;
          default:
            valor = 0;
        }
        this.lessHeightResizeByTop(position, valor);
      } else {
        switch (true) {
          case top <= -15 && top >= -40:
            console.log('1', top);
            valor = 1;
            break;
          case top <= -40 && top >= -65:
            console.log('2', top);
            valor = 2;
            break;
          case top <= -65 && top >= -90:
            console.log('3', top);
            valor = 3;
            break;
          case top <= -90 && top >= -115:
            console.log('4', top);
            valor = 4;
            break;
          case top <= -115 && top >= -140:
            console.log('5', top);
            valor = 5;
            break;
          case top <= -140 && top >= -165:
            console.log('6', top);
            valor = 6;
            break;
          case top <= -165 && top >= -190:
            console.log('7', top);
            valor = 7;
            break;
          case top <= -190 && top >= -215:
            console.log('8', top);
            valor = 8;
            break;
          case top <= -215 && top >= -240:
            console.log('9', right);
            valor = 9;
            break;
          case top <= -240 && top >= -265:
            console.log('10', bottom);
            valor = 10;
            break;
          case top <= -265 && top >= -290:
            console.log('11', bottom);
            valor = 11;
            break;
          case top <= -290 && top >= -315:
            console.log('12', top);
            valor = 12;
            break;
          case top <= -315 && top >= -340:
            console.log('13', top);
            valor = 13;
            break;
          case top <= -340 && top >= -365:
            console.log('14', top);
            valor = 14;
            break;
          case top <= -365 && top >= -390:
            console.log('15', top);
            valor = 15;
            break;
          case top <= -390 && top >= -415:
            console.log('16', top);
            valor = 16;
            break;
          case top <= -415 && top <= -440:
            console.log('17', top);
            valor = 17;
            break;
          case top <= -440 && top >= -465:
            console.log('18', top);
            valor = 18;
            break;
          case top <= -465 && top >= -490:
            console.log('19', top);
            valor = 19;
            break;
          case top <= -490 && top >= -515:
            console.log('20', bottom);
            valor = 20;
            break;
          case top <= -515 && top >= -540:
            console.log('21', top);
            valor = 21;
            break;
          case top <= -540 && top >= -565:
            console.log('22', top);
            valor = 22;
            break;
          case top <= -565 && top >= -590:
            console.log('23', top);
            valor = 23;
            break;
          default:
            valor = 0;
        }
        this.moreHeightResizeByTop(position, valor);
      }
    }
  }

  /************** RESIZE WIDTH **************/
  /** WIDTH RESIZE BY RIGHT */
  moreWidthResizeByRight(position: any, valor: number) {
    console.log('position:' + position + ' valor: ' + valor);
    if (this.vessels[position].gridColumnEnd < this.gridColumnEnd) {
      this.vessels[position].gridColumnEnd += valor;
    } else if (
      this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
      this.vessels[position].gridColumnStart > this.gridColumnStart
    ) {
      window.alert('Move the ship to the left to take up more space');
    } else if (
      this.vessels[position].gridColumnEnd >= this.gridColumnEnd &&
      this.vessels[position].gridColumnStart >= this.gridColumnStart
    ) {
      window.alert('you can take up no more space on the dock');
    }
  }

  lessWidthResizeByRight(position: any, valor: number) {
    console.log('start: ' + this.vessels[position].gridColumnStart + ' end: ' + this.vessels[position].gridColumnEnd);
    if (
      this.vessels[position].gridColumnStart >= this.gridColumnStart &&
      this.vessels[position].gridColumnEnd > this.vessels[position].gridColumnStart + 1
    ) {
      this.vessels[position].gridColumnEnd -= valor;
    }
  }
  /** END WIDTH RESIZE BY RIGHT */

  /** WIDTH RESIZE BY LEFT */
  moreWidthResizeByLeft(position: any, valor: number) {
    console.log('moreWidthResizeByLeft');
    console.log('start:', this.vessels[position].gridColumnStart);
    console.log('end:', this.vessels[position].gridColumnEnd);
    if (this.vessels[position].gridColumnStart > this.gridColumnStart) {
      this.vessels[position].gridColumnStart -= valor;
    }

    if (this.vessels[position].gridColumnStart < this.gridColumnStart) {
      this.vessels[position].gridColumnStart = this.gridColumnStart;
    }

    console.log('start:', this.vessels[position].gridColumnStart);
    console.log('end:', this.vessels[position].gridColumnEnd);
  }

  lessWidthResizeByLeft(position: any, valor: number) {
    console.log('lessWidthResizeByLeft' + ' valor ' + valor);
    console.log('start: ', this.vessels[position].gridColumnStart + ' end:' + this.vessels[position].gridColumnEnd);
    if (this.vessels[position].gridColumnStart < this.vessels[position].gridColumnEnd) {
      console.log('es menor');
      this.vessels[position].gridColumnStart += valor;
      console.log('start: ', this.vessels[position].gridColumnStart + ' end:' + this.vessels[position].gridColumnEnd);
      if (this.vessels[position].gridColumnStart === this.vessels[position].gridColumnEnd) {
        this.vessels[position].gridColumnStart = this.vessels[position].gridColumnEnd - 1;
      }
    }

    console.log('start:', this.vessels[position].gridColumnStart);
    console.log('end:', this.vessels[position].gridColumnEnd);
  }
  /** END WIDTH RESIZE BY LEFT */

  /************** END RESIZE WIDTH **************/

  /************** RESIZE HEIGHT **************/
  /** HEIGHT RESIZE BY TOP */
  moreHeightResizeByTop(position: any, valor: number) {
    console.log('more height REsize by TOp');
    console.log(
      'position:' +
        position +
        ' valor: ' +
        valor +
        ' gridRowStart: ' +
        this.vessels[position].gridRowStart +
        ' gridRowEnd: ' +
        this.vessels[position].gridRowEnd
    );
    if (this.vessels[position].gridRowStart > this.gridRowStart) {
      this.vessels[position].gridRowStart -= valor;
    }

    if (this.vessels[position].gridRowStart < this.gridRowStart) {
      this.vessels[position].gridRowStart = this.gridRowStart;
    }

    console.log(
      'position:' +
        position +
        ' valor: ' +
        valor +
        ' gridRowStart: ' +
        this.vessels[position].gridRowStart +
        ' gridRowEnd: ' +
        this.vessels[position].gridRowEnd
    );
  }

  lessHeightResizeByTop(position: any, valor: number) {
    console.log('Less Height By Top:');
    console.log(
      'position:' +
        position +
        ' valor: ' +
        valor +
        ' gridRowStart: ' +
        this.vessels[position].gridRowStart +
        ' gridRowEnd: ' +
        this.vessels[position].gridRowEnd
    );
    if (this.vessels[position].gridRowStart < this.vessels[position].gridRowEnd) {
      this.vessels[position].gridRowStart += valor;
    }

    if (this.vessels[position].gridRowStart === this.vessels[position].gridRowEnd) {
      this.vessels[position].gridRowStart = this.vessels[position].gridRowEnd - 1;
    }
  }
  /** END HEIGHT RESIZE BY TOP */

  /** HEIGHT RESIZE BY BOTTOM */
  moreHeightResizeByBottom(position: any, valor: number) {
    console.log('more height REsize by Bottom');

    if (this.vessels[position].gridRowEnd <= this.gridRowEnd) {
      this.vessels[position].gridRowEnd += valor;
    }
  }
  lessHeightResizeByBottom(position: any, valor: number) {
    console.log(
      'position:' +
        position +
        ' valor: ' +
        valor +
        ' gridRowStart: ' +
        this.vessels[position].gridRowStart +
        ' gridRowEnd: ' +
        this.vessels[position].gridRowEnd
    );
    if (this.vessels[position].gridRowStart < this.vessels[position].gridRowEnd) {
      this.vessels[position].gridRowEnd -= valor;
    }
    if (this.vessels[position].gridRowStart === this.vessels[position].gridRowEnd) {
      this.vessels[position].gridRowEnd = this.vessels[position].gridRowStart + 1;
    }
    console.log(
      'position:' +
        position +
        ' valor: ' +
        valor +
        ' gridRowStart: ' +
        this.vessels[position].gridRowStart +
        ' gridRowEnd: ' +
        this.vessels[position].gridRowEnd
    );
  }
  /** END HEIGHT RESIZE BY BOTTOM */

  /**************END RESIZE WIDTH **************/
}
