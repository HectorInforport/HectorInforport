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
  checkValue = '';
  elementValue = 0;

  vStart1: number = 0;
  vStart2: number = 0;
  increaseValue: number = 0;
  constructor() {}

  numeroAleatorio(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  onResizeEnd(event: ResizeEvent, position: any): void {
    this.checkEvent(event, position);
  }

  /** COMPRUEBA DE QUE PARTE SE HACE RESIZE EN EL ELEMENTO */
  checkEvent(event: ResizeEvent, position: any) {
    switch (true) {
      case event.edges.right !== undefined:
        this.checkValue = 'right';
        break;
      case event.edges.left !== undefined:
        this.checkValue = 'left';
        break;
      case event.edges.top !== undefined:
        this.checkValue = 'top';
        break;
      case event.edges.bottom !== undefined:
        this.checkValue = 'bottom';
        break;
      default:
        console.log('error');
    }
    /** LLAMA A LA FUNCIÓN ASIGN VALUE */
    this.assignValue(event, position);
  }

  assignValue(event: ResizeEvent, position: any) {
    const moveTo: string = this.checkValue;
    let valor;
    if (moveTo === 'right') {
      this.vStart1 = 50;
      this.vStart2 = 90;
      this.increaseValue = 60;
      valor = event.edges.right;
      this.resizeElement(valor, this.vStart1, this.vStart2, this.increaseValue);
      if (valor > 1) {
        this.moreWidthResizeByRight(position, this.elementValue);
      } else {
        this.lessWidthResizeByRight(position, this.elementValue);
      }
    }
    if (moveTo === 'left') {
      this.vStart1 = 50;
      this.vStart2 = 90;
      this.increaseValue = 60;
      valor = event.edges.left;
      this.resizeElement(valor, this.vStart1, this.vStart2, this.increaseValue);
      if (valor > 1) {
        this.lessWidthResizeByLeft(position, this.elementValue);
      } else {
        this.moreWidthResizeByLeft(position, this.elementValue);
      }
    }
    if (moveTo === 'bottom') {
      this.vStart1 = 15;
      this.vStart2 = 40;
      this.increaseValue = 25;
      valor = event.edges.bottom;
      this.resizeElement(valor, this.vStart1, this.vStart2, this.increaseValue);
      if (valor > 1) {
        this.moreHeightResizeByBottom(position, this.elementValue);
      } else {
        this.lessHeightResizeByBottom(position, this.elementValue);
      }
    }
    if (moveTo === 'top') {
      this.vStart1 = 15;
      this.vStart2 = 40;
      this.increaseValue = 25;
      valor = event.edges.top;
      this.resizeElement(valor, this.vStart1, this.vStart2, this.increaseValue);

      if (valor > 1) {
        this.lessHeightResizeByTop(position, this.elementValue);
      } else {
        this.moreHeightResizeByTop(position, this.elementValue);
      }
    }
  }

  resizeElement(valor: any, v1: number, v2: number, av: number) {
    const startValue1 = v1;
    const startValue2 = v2;
    const increaseValue = av;
    if (valor > 1) {
      switch (true) {
        case valor >= startValue1 && valor <= startValue2:
          this.elementValue = 1;
          break;
        case valor >= startValue1 + increaseValue && valor <= startValue2 + increaseValue:
          this.elementValue = 2;
          break;
        case valor >= startValue1 + increaseValue * 2 && valor <= startValue2 + increaseValue * 2:
          this.elementValue = 3;
          break;
        case valor >= startValue1 + increaseValue * 3 && valor <= startValue2 + increaseValue * 3:
          this.elementValue = 4;
          break;
        case valor >= startValue1 + increaseValue * 4 && valor <= startValue2 + increaseValue * 4:
          this.elementValue = 5;
          break;
        case valor >= startValue1 + increaseValue * 5 && valor <= startValue2 + increaseValue * 5:
          this.elementValue = 6;
          break;
        case valor >= startValue1 + increaseValue * 6 && valor <= startValue2 + increaseValue * 6:
          this.elementValue = 7;
          break;
        case valor >= startValue1 + increaseValue * 7 && valor <= startValue2 + increaseValue * 7:
          this.elementValue = 8;
          break;
        case valor >= startValue1 + increaseValue * 8 && valor <= startValue2 + increaseValue * 8:
          this.elementValue = 9;
          break;
        case valor >= startValue1 + increaseValue * 9 && valor <= startValue2 + increaseValue * 9:
          this.elementValue = 10;
          break;
        case valor >= startValue1 + increaseValue * 10 && valor <= startValue2 + increaseValue * 10:
          this.elementValue = 11;
          break;
        case valor >= startValue1 + increaseValue * 11 && valor <= startValue2 + increaseValue * 11:
          this.elementValue = 12;
          break;
        case valor >= startValue1 + increaseValue * 12 && valor <= startValue2 + increaseValue * 12:
          this.elementValue = 13;
          break;
        case valor >= startValue1 + increaseValue * 13 && valor <= startValue2 + increaseValue * 13:
          this.elementValue = 14;
          break;
        default:
          this.elementValue = 0;
      }
    } else {
      switch (true) {
        case valor <= -startValue1 && valor >= -startValue2:
          this.elementValue = 1;
          break;
        case valor <= -startValue1 - increaseValue && valor >= -startValue2 - increaseValue:
          this.elementValue = 2;
          break;
        case valor <= -startValue1 - increaseValue * 2 && valor >= -startValue2 - increaseValue * 2:
          this.elementValue = 3;
          break;
        case valor <= -startValue1 - increaseValue * 3 && valor >= -startValue2 - increaseValue * 3:
          this.elementValue = 4;
          break;
        case valor <= -startValue1 - increaseValue * 4 && valor >= -startValue2 - increaseValue * 4:
          this.elementValue = 5;
          break;
        case valor <= -startValue1 - increaseValue * 5 && valor >= -startValue2 - increaseValue * 5:
          this.elementValue = 6;
          break;
        case valor <= -startValue1 - increaseValue * 6 && valor >= -startValue2 - increaseValue * 6:
          this.elementValue = 7;
          break;
        case valor <= -startValue1 - increaseValue * 7 && valor >= -startValue2 - increaseValue * 7:
          this.elementValue = 8;
          break;
        case valor <= -startValue1 - increaseValue * 8 && valor >= -startValue2 - increaseValue * 8:
          this.elementValue = 9;
          break;
        case valor <= -startValue1 - increaseValue * 9 && valor >= -startValue2 - increaseValue * 9:
          this.elementValue = 10;
          break;
        case valor <= -startValue1 - increaseValue * 10 && valor >= -startValue2 - increaseValue * 10:
          this.elementValue = 11;
          break;
        case valor <= -startValue1 - increaseValue * 11 && valor >= -startValue2 - increaseValue * 11:
          this.elementValue = 12;
          break;
        case valor <= -startValue1 - increaseValue * 12 && valor >= -startValue2 - increaseValue * 12:
          this.elementValue = 13;
          break;
        case valor <= -startValue1 - increaseValue * 13 && valor >= -startValue2 - increaseValue * 13:
          this.elementValue = 14;
          break;
        default:
          this.elementValue = 0;
      }
    }
  }

  /************** RESIZE WIDTH **************/
  /** WIDTH RESIZE BY RIGHT */
  moreWidthResizeByRight(position: any, valor: number) {
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
    if (this.vessels[position].gridColumnStart > this.gridColumnStart) {
      this.vessels[position].gridColumnStart -= valor;
    }

    if (this.vessels[position].gridColumnStart < this.gridColumnStart) {
      this.vessels[position].gridColumnStart = this.gridColumnStart;
    }
  }

  lessWidthResizeByLeft(position: any, valor: number) {
    if (this.vessels[position].gridColumnStart < this.vessels[position].gridColumnEnd) {
      this.vessels[position].gridColumnStart += valor;
      if (this.vessels[position].gridColumnStart === this.vessels[position].gridColumnEnd) {
        this.vessels[position].gridColumnStart = this.vessels[position].gridColumnEnd - 1;
      }
    }
  }
  /** END WIDTH RESIZE BY LEFT */

  /************** END RESIZE WIDTH **************/

  /************** RESIZE HEIGHT **************/
  /** HEIGHT RESIZE BY TOP */
  moreHeightResizeByTop(position: any, valor: number) {
    if (this.vessels[position].gridRowStart > this.gridRowStart) {
      this.vessels[position].gridRowStart -= valor;
    }

    if (this.vessels[position].gridRowStart < this.gridRowStart) {
      this.vessels[position].gridRowStart = this.gridRowStart;
    }
  }

  lessHeightResizeByTop(position: any, valor: number) {
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
    if (this.vessels[position].gridRowEnd <= this.gridRowEnd) {
      this.vessels[position].gridRowEnd += valor;
    }
  }
  lessHeightResizeByBottom(position: any, valor: number) {
    if (this.vessels[position].gridRowStart < this.vessels[position].gridRowEnd) {
      this.vessels[position].gridRowEnd -= valor;
    }
    if (this.vessels[position].gridRowStart === this.vessels[position].gridRowEnd) {
      this.vessels[position].gridRowEnd = this.vessels[position].gridRowStart + 1;
    }
  }
  /** END HEIGHT RESIZE BY BOTTOM */

  /**************END RESIZE WIDTH **************/
}
