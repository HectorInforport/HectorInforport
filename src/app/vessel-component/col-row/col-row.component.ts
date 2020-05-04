import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';

// Import constants
import { HOURS } from '../../utils/hours';
import { VESSELS } from '../../utils/vessels';

// Import Cdk Drag & Drop
import { CdkDragDrop, CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, getHours } from 'date-fns';

import { Subject } from 'rxjs';
import { ICONS } from '../../utils/icons';

// Import the resized event model
import { ResizeEvent } from 'angular-resizable-element';

// SERVICIE
import { DayOftheWeekService } from '../services/day-ofthe-week.service';
import { MonthService } from '../services/month.service';
import { ResizeService } from '../services/resize.service';
import { VesselService } from '../services/vessel.service';
import { MovimentsService } from '../services/moviments.service';

@Component({
  selector: 'app-col-row',
  templateUrl: './col-row.component.html',
  styleUrls: ['./col-row.component.css']
})
export class ColRowComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() noraiMeters: number;
  @Input() language: string = 'EN'; // 'ES': Spanish 'EN': English Default: 'EN

  /**** GRID STRUCTURE */
  meters = Array(15).fill(0);
  container = Array(360).fill(0);
  /**** END GRID STRUCTURE */

  /**** DEFINE: GRID AND COLUMNS */
  gridColumnStart = 3;
  gridColumnEnd = 18;
  gridRowStart = 2;
  gridRowEnd = 26;
  /**** END DEFINE: GRID AND COLUMNS */

  refresh: Subject<any> = new Subject();

  /**** CONFIGURE DATE */
  date = new Date(); // new Date;
  dayofthemonth = ('0' + this.date.getDate()).substr(-2); // Day of the month (1-31)
  dayoftheweek = this.date.getDay(); // Day of the week (0-6)
  month = this.date.getMonth(); // Month (0-11)
  year = this.date.getFullYear(); // Year
  today: any = [];
  /**** END CONFIGURE DATE */

  /**** IMPORT CONSTANTS */
  hours = HOURS;
  vessels = VESSELS;
  icons = ICONS;
  /**** END IMPORT CONSTANTS */

  constructor(
    public resizeService: ResizeService,
    public dayOftheWeekService: DayOftheWeekService,
    public monthService: MonthService,
    public vesselService: VesselService,
    public movimentsService: MovimentsService
  ) {}

  ngOnInit() {
    if (!this.noraiMeters) {
      this.noraiMeters = 100;
    }
    this.dayOftheWeekService.getDayOftheWeek(this.dayoftheweek, this.language);
    this.monthService.getMonth(this.month, this.language);
    this.today.push({
      dayoftheweek: this.dayOftheWeekService.dayOftheWeek,
      month: this.monthService.month,
      dayofthemonth: this.dayofthemonth,
      year: this.year,
      date: `${this.dayOftheWeekService.dayOftheWeek} (${this.dayofthemonth} ${this.monthService.month}) `
    });
  }
  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {}

  onResizeEnd(event: ResizeEvent, position: any): void {
    this.resizeService.onResizeEnd(event, position);
  }

  /** VESSEL MOVIMENTS */
  moveDown(position: any) {
    this.movimentsService.moveDown(position);
  }
  moveUp(position: any) {
    this.movimentsService.moveUp(position);
  }
  moveRight(position: any) {
    this.movimentsService.moveRight(position);
  }
  moveLeft(position: any) {
    this.movimentsService.moveLeft(position);
  }
  // moreWidth(position: any) {
  //   this.movimentsService.moreWidth(position);
  // }
  // lessWidth(position: any) {
  //   this.movimentsService.lessWidth(position);
  // }
  // moreHeight(position: any) {
  //   this.movimentsService.moreHeight(position);
  // }
  // lessHeight(position: any) {
  //   this.movimentsService.lessHeight(position);
  // }

  /** END VESSEL MOVIMENTS */

  deleteEvent(position: any) {
    this.vesselService.deleteEvent(position, this.vessels);
  }

  addEvent(): void {
    console.log('add Event');
    this.vesselService.addEvent();
  }
}
