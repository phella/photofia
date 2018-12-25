import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie';
import { AuthencationService } from '../authencation.service';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Camera } from '../models/camera.model';
import { Lens } from '../models/lens.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  privilege: number;
  addCamera = new Camera();
  addLens = new Lens();
  constructor(public cookie: CookieService, public at: AuthencationService , public es: EventsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.es.getprev(this.route.snapshot.params['id']).subscribe(priv => this.privilege = priv);
  }
  signout() {
    this.at.currentUser.email = '';
    this.cookie.removeAll();
    }
    insertLens() {
      this.es.insertLens(this.addLens).subscribe();
    }
    insertCamera() {
      this.es.insertCamera(this.addCamera).subscribe();
    }
}
