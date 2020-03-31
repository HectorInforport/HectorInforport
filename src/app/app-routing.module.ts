import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { VesselCalendarComponent } from './calendar/vessel-calendar/vessel-calendar.component';
import { CanvasComponent } from './canvas/canvas.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'vessel-calendar', component: VesselCalendarComponent },
  { path: 'canvas', component: CanvasComponent },
  { path: '', redirectTo: '/canvas', pathMatch: 'full' },
  { path: '**', component: CanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
