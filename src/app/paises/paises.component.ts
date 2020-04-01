import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDragEnd
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent
  implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {
  paises: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(res => {
      this.paises = res;
    });
  }

  ngAfterViewInit() {}
  ngAfterContentInit(): void {}

  ngAfterViewChecked() {
    console.log('PAISES', this.paises);
  }

  drop(event: CdkDragDrop<any>) {
    // Para hacer persistente el cambio
    // 1. Arreglo actual 2.

    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
    console.log('ACTUALIZAMOS', this.paises);
  }
}
