import { Component, OnInit, OnChanges } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AuthencationService } from '../authencation.service';
import { Gift } from '../models/Gift.model';
import { Notifi } from '../models/Notification.model';
import { CookieService } from 'angular2-cookie';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit, OnChanges {
  points: number;
  gifts: Gift[];
  noti1: Notifi[];
  noti2: Notifi[];
  noti3: Notifi[];
  selectedGift = new Gift();
  response: string;
  constructor(private es: EventsService, private at: AuthencationService, private cookie: CookieService ) { }

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
}
