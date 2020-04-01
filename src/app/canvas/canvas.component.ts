import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input
} from '@angular/core';
import { CanvasService } from './canvas.service';
import { fromEvent } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  constructor(private canvasService: CanvasService) {}

  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @Input() width = 1200;
  @Input() height = 800;

  iteraciones = Array(27).fill(0);

  private cx: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    // set width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    // method to star capturing mouse events
    // captureEvents

    this.captureEvents(canvasEl);
  }

  ngOnInit(): void {}

  // CAPTURAR LOS EVENTOS DEL MOUSE
  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap(e => {
          // after a mouse down, we'll record all mouse moves
          // recogemos todos los movimientos del mouse
          return fromEvent(canvasEl, 'mousemove').pipe(
            //  unsubscribe, cuando soltamos el ratón o cuando salimos del canvas
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),

            // Pairwise, nos permite obtener el punto donde soltamos el rarón para seguir dibujando
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        // posicion anterior
        console.log('RECT', rect);
        console.log('RES CLIENT X', res[0].clientX);
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        // posicion actual
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        this.dranOnCanvas(prevPos, currentPos);
      });
  }

  // DIBUJAR EN EL CANVAS

  dranOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    console.log('PREVPOS', prevPos);
    console.log('CURRENTPOS', currentPos);
    // En caso de que el contest no esté configurado
    if (!this.cx) {
      return;
    }

    // Emperar nuestro dibujo
    this.cx.beginPath();

    // Vamos a dibujar líneas, necesitamos una posición previa
    if (prevPos) {
      // Set el punto de comienzo

      this.cx.moveTo(prevPos.x, prevPos.y);

      // Dibujar una línea desde la posición de inicio, hasta la posición actual
      this.cx.lineTo(currentPos.x, currentPos.y);

      // Traza la línea con los syles, que definimos anteriormente
      this.cx.stroke();
    }
  }

  clearCanvas(canvasEl: HTMLCanvasElement) {
    this.cx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
}
