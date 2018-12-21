import { Component, OnInit, OnChanges } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AuthencationService } from '../authencation.service';
import { Gift } from '../models/Gift.model';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit, OnChanges {
  points: number;
  gifts: Gift[];
  selectedGift = new Gift();
  response: string;
  constructor(private es: EventsService, private at: AuthencationService) { }

  ngOnInit() {
    this.es.getCustomerPoints(this.at.currentUser.email).subscribe(
      point => {this.points = point ; }
    );
    this.es.getGifts().subscribe(
      Gif => {this.gifts = Gif ; }
    );
  }
  ngOnChanges() {
    this.es.getCustomerPoints(this.at.currentUser.email).subscribe(
      point => {this.points = point ; }
    );
  }
  redeem() {
    this.es.redeem(this.at.currentUser.email, this.selectedGift ).subscribe(
      resp => {this.response = resp ; }
    );
  }
}
