import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/Event.model';
import { AuthencationService } from '../authencation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  cities: string[];
  _event = new Event();
  constructor(private es: EventsService, private at: AuthencationService, private router: Router) { }

  ngOnInit() {
    this.es.getCities().subscribe(
      cit => {this.cities = cit ; }
    );
  }
createEvent() {
  this.es.createEvent(this.at.currentUser.email, this._event).subscribe();
  this.router.navigate(['/events']);
}
}
