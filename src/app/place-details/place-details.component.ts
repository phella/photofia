import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../models/place.model';
import { EventsService } from '../services/events.service';
import { Images } from '../models/Images.model';
import { AuthencationService } from '../authencation.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  constructor(private es: EventsService, private at: AuthencationService) { }
  // tslint:disable-next-line:no-input-rename
  @Input('selectedPlace') selectedPlace: Place;
  images: Images[];
  ngOnInit() {
    this.es.getImagesOfPlace(this.selectedPlace.placeName).subscribe(
      photos => { this.images = photos ; }
    );
  }

}
