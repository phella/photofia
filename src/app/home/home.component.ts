import { Component, OnInit } from '@angular/core';
import { AuthencationService } from '../authencation.service';
import { EventsService } from '../services/events.service';
import { Images } from '../models/Images.model';
import { ActivatedRoute } from '@angular/router';
import { Notifi } from '../models/Notification.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Images[];
  d = new Date();
  privilege: number;
  noti1: Notifi[];
  noti2: Notifi[];
  noti3: Notifi[];
  profileString = 'profile';
  base = 'http://localhost/images/';
  constructor(public at: AuthencationService, private es: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.es.getPhotosHome(this.at.currentUser.email).subscribe(
      img => { this.images = img ; }
    );
    this.es.getprev(this.route.snapshot.params['id']).subscribe(priv => this.privilege = priv);
    if ( this.privilege === 2) {
      this.profileString = 'statistics' ;
    }
  }
  signout() {
  this.at.currentUser.email = '';
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
}
