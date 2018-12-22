import { Component, OnInit } from '@angular/core';
import { AuthencationService } from '../authencation.service';
import { EventsService } from '../services/events.service';
import { Images } from '../models/Images.model';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Images[];
  d = new Date();
  privilege: number;
  base = 'http://localhost/images/';
  adminStats = 'profile';
  constructor(private at: AuthencationService, private es: EventsService, private route: ActivatedRoute, private cookie: CookieService) { }

  ngOnInit() {
    this.es.getPhotosHome(this.at.currentUser.email).subscribe(
      img => { this.images = img ; }
    );
    this.es.getprev(this.route.snapshot.params['id']).subscribe(priv => this.privilege = priv);
    if ( this.privilege === 2) {
      this.adminStats = 'stats';
    }
  }
  signout() {
  this.at.currentUser.email = '';
  this.cookie.removeAll();
  }
}
