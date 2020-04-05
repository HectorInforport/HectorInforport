import { fromEvent } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input
} from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-canvas-grid',
  templateUrl: './canvas-grid.component.html',
  styleUrls: ['./canvas-grid.component.css']
})
export class CanvasGridComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  @Input() width = 1400;
  @Input() height = 800;
  tiles_array = [];
  barcos = Array(10).fill(0);
  dias: any = [
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
    'SÁBADO',
    'DOMINGO'
  ];

  dragPosition = { x: -800, y: -820 };

  private cx: CanvasRenderingContext2D;

  constructor() {}

  ngAfterViewInit(): void {
    // Deinimos el canvas y el contexto
    // const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    // this.cx = canvasEl.getContext('2d');
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    // Largo y Ancho
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    for (let x = 0; x <= 1400; x = x + 50) {
      this.cx.moveTo(x, 0);
      this.cx.lineTo(x, 1400);
    }

    for (let y = 0; y <= 1400; y = y + 50) {
      this.cx.moveTo(0, y);
      this.cx.lineTo(1400, y);
    }

    this.cx.strokeStyle = '#0062cc';
    this.cx.stroke();

    // FUNCIONES DEL NUEVO GRID
    /**  canvasEl.onclick = e => {
      let event = e;
      console.log('EVENT', e);
      let elementClickedId = this.checkClick(event);
      console.log('You click element with number' + elementClickedId);

      this.drawTiles();
    };

    canvasEl.onmousemove = e => {
      let event = e;
      let elementUnder = this.checkClick(event);
      if (elementUnder == 1) {
        this.changerCursor('pointer');
      } else {
        this.changerCursor('default');
      }
    };

    this.createTiles(6, 6, canvasEl);
    this.drawTiles();
    */
  }

  ngOnInit() {}
  /*

  Tile(x, y, width, height, id, fillColor, strokeStyle?) {
    id = id;
    x = x;
    y = y;
    width = width;
    height = height;
    const workWidth = {
      start: x,
      end: x + this.width
    };
    const workHeight = {
      start: y,
      end: y + height
    };
    fillColor = fillColor;
    strokeStyle = 'black';
  }

  checkClick(event) {
    let clickX = event.layerX;
    let clickY = event.layerY;
    let element;

    this.tiles_array.forEach((tile, i, arr) => {
      if (
        clickX > tile.workWidth.start &&
        clickX < tile.workWidth.end &&
        clickY > tile.workHeight.start &&
        clickY < tile.workHeight.end
      ) {
        element = tile.id;
      }
    });
    return element;
  }

  // Create Tiles
  createTiles(quantityX, quantityY, canvasEl) {
    let quantityAll = quantityX * quantityY;
    let titleWidth = canvasEl.width / quantityX;
    let tileHeight = canvasEl.height / quantityY;

    let drawPosition = {
      x: 0,
      y: 0
    };

    for (let i = 0; i < quantityAll; i++) {
      let fillColor = this.getRandomColor();
      let tile = new this.Tile(
        drawPosition.x,
        drawPosition.y,
        titleWidth,
        tileHeight,
        i,
        fillColor
      );

      this.tiles_array.push(tile);

      drawPosition.x = drawPosition.x + titleWidth;
      if (drawPosition.x >= canvasEl.width) {
        drawPosition.x = 0;
        drawPosition.y = drawPosition.y + tileHeight;
      }
    }
  }

  drawTiles() {
    this.tiles_array.forEach((tile, i, arr) => {
      this.cx.beginPath();
      this.cx.fillStyle = tile.fillColor;
      this.cx.rect(tile.x, tile.y, tile.width, tile.height);
      this.cx.lineWidth = 2;
      this.cx.strokeStyle = tile.strokeStyle;
      this.cx.stroke();
      this.cx.fill();
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changerCursor(cursorType) {
    document.body.style.cursor = cursorType;
  }
  */
}
