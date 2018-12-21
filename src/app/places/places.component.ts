import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';
import { EventsService } from '../services/events.service';
import { environment} from '../../environments/environment';
import { AuthencationService } from '../authencation.service';

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
  constructor(private es: EventsService, private at: AuthencationService) { }

  ngOnInit() {
    this.es.getPlaces().subscribe(
      cit => { this.places = cit ; }
    );
  }
  toggleDetails(_place: Place) {
    if (this.allPlaces === true) {
      this.allPlaces = false ;
      this.selectedPlace = _place;
    } else {
      this.allPlaces = true;
    }
  }
}
