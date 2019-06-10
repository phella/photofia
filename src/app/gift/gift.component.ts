import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AuthencationService } from '../authencation.service';
import { Gift } from '../models/Gift.model';
import { Notifi } from '../models/Notification.model';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit, OnDestroy {
  points: number;
  gifts: Gift[];
  noti1: Notifi[];
  noti2: Notifi[];
  noti3: Notifi[];
  interval: any;
  giftPoints: number;
  giftName: string;
  selectedGift = new Gift();
  response: string;
  priv: number;
  selectedEmail: string;
  constructor(private es: EventsService, private at: AuthencationService) { }

  ngOnInit() {
    this.getcustomerpoints();
    this.interval = setInterval(() => { this.getcustomerpoints(); }, 1000);
    this.es.getGifts().subscribe(
      Gif => {this.gifts = Gif ; }
    );
    this.es.getprev(this.at.currentUser.email).subscribe(prev => {this.priv = prev ; });
  }
  getcustomerpoints() {
    this.es.getCustomerPoints(this.at.currentUser.email).subscribe(
      point => {this.points = point ; }
    );
  }
  ngOnDestroy() {
    clearInterval(this.interval);
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
    }
    promote() {
      this.es.promote(this.selectedEmail).subscribe();
    }
    addGift( ) {
      this.es.addGift(this.giftName, this.giftPoints).subscribe();
    }
}
