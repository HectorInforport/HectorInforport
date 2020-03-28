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

  // Calendar Default view (Week|Month|Day)
  view: CalendarView = CalendarView.Week;

  // dayStart and dayEnt
  /* dayStartHour = Math.max(0, getHours(new Date()) - 2);
  dayEndHour = Math.min(23, getHours(new Date()) + 2);*/

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
      title: 'VICENT THOMAS BRIDGE',
      code: '352',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      larboard: true,
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
      title: 'VALENCIA BRIDGE',
      code: '351',
      color: colors.blue,
      allDay: true,
      starboard: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'EVER URSULA',
      code: '316',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'EVER URSULA 2',
      code: '316',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'EVER URSULA 2',
      code: '316',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 0),
      end: addHours(new Date(), 0),
      title: 'EVER URSULA 2',
      code: '316',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true,
      allDay: true
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'VICENT THOMAS BRIDGE2',
      code: '352',
      color: colors.green,
      actions: this.actions,
      allDay: true,
      larboard: true,
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
        code: 'VESSEL CODE',
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
