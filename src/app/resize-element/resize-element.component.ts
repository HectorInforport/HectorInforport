import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-resize-element',
  templateUrl: './resize-element.component.html',
  styleUrls: ['./resize-element.component.css'],
})
export class ResizeElementComponent implements OnInit {
  tres = Array(3).fill(0);

  x: number;
  y: number;
  px: number;
  py: number;
  width: number;
  height: number;
  minArea: number;
  draggingCorner: boolean;
  draggingWindow: boolean;
  resizer: any;
  x2: number;
  y2: number;
  px2: number;
  py2: number;
  width2: number;
  height2: number;
  constructor() {
    this.x = 300;
    this.y = 100;
    this.px = 0;
    this.py = 0;
    this.width = 600;
    this.height = 300;

    this.x2 = 300;
    this.y2 = 100;
    this.px2 = 0;
    this.py2 = 0;
    this.width2 = 600;
    this.height2 = 300;
    this.draggingCorner = false;
    this.draggingWindow = false;
    this.minArea = 20000;
  }

  ngOnInit() {}

  area() {
    return this.width * this.height;
  }

  onWindowPress(event: MouseEvent) {
    this.draggingWindow = true;
    this.px = event.clientX;
    this.py = event.clientY;
    this.px2 = event.clientX;
    this.py2 = event.clientY;
  }

  onWindowDrag(event: MouseEvent) {
    if (!this.draggingWindow) {
      return;
    }
    let offsetX = event.clientX - this.px;
    let offsetY = event.clientY - this.py;

    let offsetX2 = event.clientX - this.px2;
    let offsetY2 = event.clientY - this.py2;

    this.x += offsetX;
    this.y += offsetY;
    this.x2 += offsetX2;
    this.y2 += offsetY2;
    this.px = event.clientX;
    this.py = event.clientY;
    this.px2 = event.clientX;
    this.py2 = event.clientY;
  }

  topLeftResize(offsetX: number, offsetY: number) {
    this.x += offsetX;
    this.y += offsetY;
    this.width -= offsetX;
    this.height -= offsetY;
  }

  topRightResize(offsetX: number, offsetY: number) {
    this.y += offsetY;
    this.width += offsetX;
    this.height -= offsetY;
  }

  bottomLeftResize(offsetX: number, offsetY: number) {
    this.x += offsetX;
    this.width -= offsetX;
    this.height += offsetY;
  }

  bottomRightResize(offsetX: number, offsetY: number) {
    this.width += offsetX;
    this.height += offsetY;
  }

  onCornerClick(event: MouseEvent, resizer?: any) {
    this.draggingCorner = true;
    this.px = event.clientX;
    this.py = event.clientY;
    this.resizer = resizer;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:mousemove', ['$event'])
  onCornerMove(event: MouseEvent) {
    if (!this.draggingCorner) {
      return;
    }
    let offsetX = event.clientX - this.px;
    let offsetY = event.clientY - this.py;

    let lastX = this.x;
    let lastY = this.y;
    let pWidth = this.width;
    let pHeight = this.height;

    this.resizer(offsetX, offsetY);
    if (this.area() < this.minArea) {
      this.x = lastX;
      this.y = lastY;
      this.width = pWidth;
      this.height = pHeight;
    }
    this.px = event.clientX;
    this.py = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onCornerRelease(event: MouseEvent) {
    this.draggingWindow = false;
    this.draggingCorner = false;
  }
}
