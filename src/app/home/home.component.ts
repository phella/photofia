import { Component, OnInit } from '@angular/core';
import { AuthencationService } from '../authencation.service';
import { EventsService } from '../services/events.service';
import { Images } from '../models/Images.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Images[];
  d = new Date();
  base = 'http://localhost/images/';
  constructor(private at: AuthencationService, private es: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.es.getPhotosHome(this.at.currentUser.email).subscribe(
      img => { this.images = img ; }
    );
  }
  signout() {
  this.at.currentUser.email = '';
  }
}
