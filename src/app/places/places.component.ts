import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';
import { EventsService } from '../services/events.service';
import { environment} from '../../environments/environment';
import { AuthencationService } from '../authencation.service';
import { Notifi } from '../models/Notification.model';
import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: Place[];
  selectedPlace: Place ;
  allPlaces = true;
  env = environment;
  noti1: Notifi[];
  noti2: Notifi[];
  noti3: Notifi[];
  priv: number;
  addPlace = new Place();
  clicked = false;
  constructor(private es: EventsService, public at: AuthencationService, private cookie: CookieService ) { }

  ngOnInit() {
    this.es.getPlaces().subscribe(
      cit => { this.places = cit ; }
    );
    this.es.getprev( this.at.currentUser.email ).subscribe( prev => {this.priv = prev ; } );
  }
  toggleDetails(_place: Place) {
    if (this.allPlaces === true) {
      this.allPlaces = false ;
      this.selectedPlace = _place;
    } else {
      this.allPlaces = true;
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
  signout() {
    this.at.currentUser.email = '';
    this.cookie.removeAll();
    }
  add() {
    this.es.addNewPlace(this.addPlace).subscribe();
    this.clicked = true;
  }
}
