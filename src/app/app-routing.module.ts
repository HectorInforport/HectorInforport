import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { VesselCalendarComponent } from './calendar/vessel-calendar/vessel-calendar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasGridComponent } from './canvas-grid/canvas-grid.component';
import { CajasComponent } from './cajas/cajas.component';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';
import { BarcosComponent } from './barcos/barcos.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'vessel-calendar', component: VesselCalendarComponent },
  { path: 'canvas', component: CanvasComponent },
  { path: 'grid', component: CanvasGridComponent },
  { path: 'cajas', component: CajasComponent },
  { path: 'drag', component: DragComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'barcos', component: BarcosComponent },
  { path: '', redirectTo: '/drag', pathMatch: 'full' },
  { path: '**', component: DragComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
