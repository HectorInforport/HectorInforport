import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent implements OnInit {
  personas = Array(500).fill(0);

  // Le indicamos que elemento debe seleccionar ( cdkVirtualScrollViewPort)
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;

  // Arr = Array;
  // num: number = 50;
  // hoy = new Date();
  // today = new Date();
  // semana = '';

  // tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));

  // cajas = [
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   6,
  //   7,
  //   8,
  //   9,
  //   10,
  //   11,
  //   12,
  //   13,
  //   14,
  //   15,
  //   16,
  //   17,
  //   18,
  //   19,
  //   20,
  //   21,
  //   22,
  //   23,
  //   24,
  //   25,
  //   26,
  //   27,
  //   28,
  //   29
  // ];

  constructor() {}

  ngOnInit() {
    // console.log('Today', this.today);
    // console.log('Tomorrow', this.tomorrow);
    // console.log(this.hoy.getDay());
    // console.log('this.semana', this.semana);
    // this.diadelaSemana();
    // console.log('this.semana', this.semana);
    console.log(this.personas);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
  irMitad() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
  irPrincipio() {
    this.viewport.scrollToIndex(0);
  }
  // diadelaSemana() {
  //   const dia: any = this.hoy.getDay();
  //   console.log('dia');

  //   switch (dia) {
  //     case 0:
  //       this.semana = 'DOMINGO';
  //       break;
  //     case 1:
  //       this.semana = 'LUNES';
  //       break;
  //     case 2:
  //       this.semana = 'MARTES';
  //       break;
  //     case 3:
  //       this.semana = 'MIERCOLES';
  //       break;
  //     case 4:
  //       this.semana = 'JUEVES';
  //       break;
  //     case 5:
  //       this.semana = 'VIERNES';
  //       break;
  //     case 6:
  //       this.semana = 'SÁBADO';
  //       break;
  //     default:
  //       return 'HAY UN ERROR EN EL DIA DE LA SEMANA';
  // //   }
  // }
}
