import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VesselCalendarComponent } from './calendar/vessel-calendar/vessel-calendar.component';
// import { MatInputModule } from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, CalendarComponent, VesselCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
