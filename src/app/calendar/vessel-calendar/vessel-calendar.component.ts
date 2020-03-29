import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  getHours
} from 'date-fns';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from '../interface/calendar-utils';
import {
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

/** IMPORTS TABLE MATERIAL DESIGN */
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#23CC3C',
    secondary: '#4FFF4C'
  }
};

@Component({
  selector: 'app-vessel-calendar',
  templateUrl: './vessel-calendar.component.html',
  styleUrls: ['./vessel-calendar.component.css']
})
export class VesselCalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  actions2: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh2: Subject<any> = new Subject();

  events2: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'MSC GENEVA',
      scale: '1202001521',
      state: 'UnAutorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.red,
      actions: this.actions2,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '2000',
      beam: '600',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'FLUVIUS TAVY',
      scale: '2202000037',
      state: 'UnAutorized',
      portOfCall: 'Gandia',
      locode: 'ESGAN',
      terminal: 'NAVARRO Y BORONAD S.L',
      vesselConsignee: 'NAVARRO Y BORONAD S.L',
      regularLine: 'SERV DE TRANSPORTE DE MERCANCÍAS',
      color: colors.yellow,
      actions: this.actions2,
      allDay: true,
      stern: true,
      shippingLine: 'MSC CRUCEROS',
      length: '3000',
      beam: '1000',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'RCC TIANJIN',
      scale: '1202001741',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'VALENCIA TERMINAL EUROPA, S.A',
      vesselConsignee: 'GRIMALDI LOGISTICA S.L.',
      regularLine: 'GRIMALDI - EURO AGEAN',
      color: colors.green,
      actions: this.actions2,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '4000',
      beam: '1200',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'FLEX EMDEN',
      scale: '3202000358',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.blue,
      actions: this.actions2,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '8000',
      beam: '6500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'MAERSK KOTKA',
      scale: '1202000943',
      state: 'UnAutorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.yellow,
      actions: this.actions2,
      allDay: true,
      stern: true,
      shippingLine: 'MSC CRUCEROS',
      length: '5000',
      beam: '3000',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'MSC SILVIA',
      scale: '1202001503',
      state: 'UnAutorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.blue,
      actions: this.actions2,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '9000',
      beam: '7500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'POHORJE',
      scale: '1202001240',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.green,
      actions: this.actions2,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '8000',
      beam: '5000',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  displayedColumns: string[] = [
    'vessel',
    'scale',
    'state',
    'arrival',
    'arrivalHour',
    'departure',
    'departureHour',
    'orientation',
    'color',
    'regularLine',
    'locode',
    'length',
    'beam'
  ];
  dataSource = new MatTableDataSource<CalendarEvent>(this.events2);

  // dataSource = this.events2;

  // Calendar Default view (Week|Month|Day)
  view: CalendarView = CalendarView.Week;

  // dayStart and dayEnt
  /* dayStartHour = Math.max(0, getHours(new Date()) - 2);
  dayEndHour = Math.min(23, getHours(new Date()) + 2);*/

  dayStartHour = 0;
  dayEndHour = 0;

  // TODO marker
  // show marker
  showMarker = false;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'MSC GENEVA',
      scale: '1202001521',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'FLUVIUS TAVY',
      scale: '2202000037',
      state: 'Autorized',
      portOfCall: 'Gandia',
      locode: 'ESGAN',
      terminal: 'NAVARRO Y BORONAD S.L',
      vesselConsignee: 'NAVARRO Y BORONAD S.L',
      regularLine: 'SERV DE TRANSPORTE DE MERCANCÍAS',
      color: colors.yellow,
      actions: this.actions,
      allDay: true,
      stern: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'RCC TIANJIN',
      scale: '1202001741',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'VALENCIA TERMINAL EUROPA, S.A',
      vesselConsignee: 'GRIMALDI LOGISTICA S.L.',
      regularLine: 'GRIMALDI - EURO AGEAN',
      color: colors.green,
      actions: this.actions,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'FLEX EMDEN',
      scale: '3202000358',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.blue,
      actions: this.actions,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'MAERSK KOTKA',
      scale: '1202000943',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.yellow,
      actions: this.actions,
      allDay: true,
      stern: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'MSC SILVIA',
      scale: '1202001503',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.blue,
      actions: this.actions,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'POHORJE',
      scale: '1202001240',
      state: 'Autorized',
      portOfCall: 'Valencia',
      locode: 'esvlc',
      terminal: 'M.S.C. TERMINAL VALENCIA,S.A.U',
      vesselConsignee: 'M.S.C. ESPAÑA, S.L.U.',
      regularLine: 'ISRAEL EXPRESS (EMEN)- MSC',
      color: colors.green,
      actions: this.actions,
      allDay: true,
      bow: true,
      shippingLine: 'MSC CRUCEROS',
      length: '1000',
      beam: '500',
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  ngOnInit() {
    // console.log('Start',  addHours(startOfDay(new Date()), 0));
    // console.log('Start',  addHours(startOfDay(new Date()), 3));
    // console.log('end', addHours(new Date(), 0));

    console.log(subDays(startOfDay(new Date()), 0));
    console.log(addDays(new Date(), 1));
    console.log('events', this.events);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // TABLE FILTER MATERIAL DESIGN
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'VESSEL NAME',
        scale: 'VESSEL CODE',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  showMarkerChange() {
    this.showMarker = !this.showMarker;
    console.log('this.showmarker', this.showMarker);
  }
}
