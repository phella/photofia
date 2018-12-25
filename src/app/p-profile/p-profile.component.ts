import { Component,  Input, SimpleChanges, TemplateRef, OnInit } from '@angular/core';
import {Photographer} from '../models/photographer';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EventsService} from '../services/events.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthencationService } from '../authencation.service';
import { Customer } from '../models/Customer.model';
import { Notifi } from '../models/Notification.model';
import { Lens } from '../models/lens.model';
import { Camera } from '../models/camera.model';
import { environment } from '../../environments/environment';
import { CookieService } from 'angular2-cookie';
@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.css'],
})
export class PProfileComponent implements  OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: BsModalService, private es: EventsService, private route: ActivatedRoute, private at: AuthencationService, private cookie: CookieService, private _route: Router ) {
  }
  modalRef: BsModalRef;
  bd = new Date('jan 1 2017');
  owner1 = new  Photographer();
  owner0 = new  Customer();
  follow: number ;
  lenses: Lens[];
  base = 'http://169.254.137.164/images/' ;
  noti1: Notifi[];
  noti2: Notifi[];
  noti3: Notifi[];
  allCams: Camera[];
  edit: Boolean = false;
  edit2: Boolean = false;
  edit2String: String = 'edit your profile';
  loggedin: string;
  sessions = 1;
  followstring = 'follow';
  session = 'reserve';
  privilege = 1;
  cameras: Camera[];
  env = environment;
  viewCmaDetails = false;
  selectedCam: Camera;
  selectedLens: Lens;
  viewlens: boolean;
  send: string = 'http://169.254.137.164/api/profile/profilePicture/' + this.at.currentUser.email;
  selectedFile: File = null;
  ngOnInit(): void {
    this.es.getprev(this.route.snapshot.params['id']).subscribe(priv => { this.privilege = priv ;
    if (this.privilege === 1) {
      this.es.getphotographer(this.route.snapshot.params['id'] ).subscribe((ph: Photographer) => {
        this.owner1 = ph ;
        }
      );
      this.getCameras();
      this.getLenses();
    } else if (this.privilege === 0) {
      this.es.getCustomer(this.route.snapshot.params['id'] ).subscribe((ph: Customer) => {
        this.owner0 = ph ; }
      );
      } else if (this.privilege === 2 ) {
        this._route.navigate(['/stats']);
      }
    });
      this.getFollowStatus();
      if ( this.at.currentUser.email === this.route.snapshot.params['id']) {
        this.edit = true;
      }
    }
    load() {
      if (this.privilege === 1) {
        this.es.getphotographer(this.route.snapshot.params['id'] ).subscribe((ph: Photographer) => {
          this.owner1 = ph ; }
        );
      } else if (this.privilege === 0) {
        this.es.getCustomer(this.route.snapshot.params['id'] ).subscribe((ph: Customer) => {
          this.owner0 = ph ; }
        );
        }
    }
    ngOnChange() {
      this.load();
    }

  getphotographer() {
    this.es.getphotographer(this.route.snapshot.params['id']).subscribe((owner) => {
      this.owner1 = owner ; }
    );
  }
  getCustomer() {
      this.es.getCustomer(this.route.snapshot.params['id']).subscribe((owner) => {
        this.owner0 = owner ; }
      );
  }
  getFollowStatus() {
    this.es.getFollowStatus(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe(
      bool => { this.follow = bool ; }
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
  respondEvent(id: number, userEmail: string, accept: number) {
    this.es.respondEvent(id, userEmail, accept).subscribe(  );
  }

  togglesessions() {
    if ( this.sessions === 1) {
      this.sessions = 2;
      this.session = 'photos';
    } else if ( this.sessions === 2 || this.sessions === 3 ) {
      this.sessions = 1 ;
      this.session = 'reserve';
    }
  }
  togglesessions2(x: number) {
    if ( this.sessions === 1 || this.sessions === 2) {
      this.sessions = x;
    } else   {
      this.sessions = 1 ;
      this.session = 'reserve';
    }
  }
  toggleEdit() {
    if (this.edit2 === true) {
      this.edit2 = false;
      this.edit2String = 'back';
    } else {
      this.edit2 = true;
      this.edit2String = 'edit your profile';
    }
  }
  togglefollow() {
    if (this.follow === 1) {
      this.es.unfollow(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe();
      this.follow = 0;
    } else {
      this.es.follow(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe();
      this.follow = 1;
    }
  }
  getCameras() {
    this.es.getPhotographerCameras(this.route.snapshot.params['id']).subscribe(
      cams => { this.cameras = cams ; }
    );
  }
  getLenses() {
    this.es.getPhotographerLenses(this.route.snapshot.params['id']).subscribe(
      len => { this.lenses = len; }
    );
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
      this.onUpload();
  }
  onUpload() {
    this.es.uploadProfilePicture(this.at.currentUser.email, this.selectedFile ).subscribe();
  }
  signout() {
    this.at.currentUser.email = '';
    this.cookie.removeAll();
    }
  viewDetails(cam: Camera) {
    this.viewCmaDetails = true;
    this.selectedCam = cam;
  }
  viewlensDetails(len: Lens) {
    this.viewlens = true;
    this.selectedLens = len;
  }
  selectCam(cam: Camera) {
    this.es.selectCam(this.at.currentUser.email, cam.cameraName ).subscribe();
  }
}
