import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { VesselCalendarComponent } from './calendar/vessel-calendar/vessel-calendar.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'vessel-calendar', component: VesselCalendarComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: '**', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
