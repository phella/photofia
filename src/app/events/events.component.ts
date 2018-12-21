import { Component, OnInit } from '@angular/core';
import { LogIn } from '../models/logIn.model';
import { Event } from '../models/Event.model';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { EventsService } from '../services/events.service';
import { AuthencationService } from '../authencation.service';
import { Notifi } from '../models/Notification.model';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  ev: Event[];
  priv: number;
  noti1: Notifi[];
  noti2: Notifi[];
  noti3: Notifi[];
  view = 1;
  constructor(private es: EventsService, private at: AuthencationService) {
   }

  ngOnInit() {
    this.es.getEvents(this.at.currentUser.email).subscribe(
      _events => {this.ev = _events ; }
    );
    this.es.getprev(this.at.currentUser.email).subscribe(
      prev => { this.priv = prev ; }
    );
  }
  switchView() {
    if ( this.view === 1) {
      this.view = 2;
    } else {
      this.view = 1;
    }
  }
  getNotification() {
    this.es.customerReserve(this.at.currentUser.email).subscribe(
      noti2 => this.noti2 = noti2
    );
    this.es.EventsApplications(this.at.currentUser.email).subscribe(
      noti1 => this.noti1 = noti1
    );
    this.es.customerFollowers(this.at.currentUser.email).subscribe(
      noti3 => this.noti3 = noti3
    );
  }

  apply(eventId: number) {
    this.es.applyEvent(eventId, this.at.currentUser.email).subscribe();
  }
}
