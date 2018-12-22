import { Component,  Input, SimpleChanges, TemplateRef, OnInit, OnChanges } from '@angular/core';
import {Images} from '../models/Images.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EventsService} from '../services/events.service';
import {ActivatedRoute} from '@angular/router';
import { AuthencationService } from '../authencation.service';
import { Review } from '../models/review.model';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private modalService: BsModalService, private es: EventsService, private route: ActivatedRoute, private at: AuthencationService) { }
  modalRef: BsModalRef;
  base = 'http://192.168.1.100/images/' ;
  pageNumber = 1;
  orderBy = '/time/';
  images: Images[] = [  ];
  imagePath: string ;
  path: string;
  rev: Review;
  firstTime: boolean;
  reviews: Review[];
  interval: any;
  places: string[];
  uploadPage = false;
  uploadButton = 'upload photo';
  owner = false;
  ngOnInit() {
    if ( this.at.currentUser.email === this.route.snapshot.params['id']) {
      this.owner = true;
    }
    this.respond();
    this.interval = setInterval(() => { this.respond(); }, 5000);
    this.es.getCities().subscribe(
      place => {this.places = place; }
    );
}
  openModal(template: TemplateRef<any>, path: string) {
    this.path = path;
    this.modalRef = this.modalService.show(template);
    this.imagePath = this.base + path;
    this.es.getPhotoReviews(this.route.snapshot.params['id'], path).subscribe(
      rev => { this.reviews = rev ; }
    );
    this.es.getCurrentPhotoReview(this.at.currentUser.email,path).subscribe(
      review => {this.rev = review ; this.setreview(); }
    );
  }
  respond() {
    this.es.getImagesPhotographer(this.route.snapshot.params['id'], this.at.currentUser.email, this.orderBy , this.pageNumber).subscribe(
      images => this.images = images
    );
  }
  setOrderBy(n: number) {
    if ( n === 1 ) {
    this.orderBy = '/time/';
    this.respond();
    } else {
      this.orderBy = '/mostPopular/';
      this.respond();
    }
  }
  setPageNumber(n: number) {
    this.pageNumber = n;
    this.respond();
   }
   rate() {
    if (this.firstTime === true) {
    this.es.reviewPhoto(this.path, this.at.currentUser.email, this.rev ).subscribe();
    } else {
      this.es.updateReviewPhoto(this.path, this.at.currentUser.email, this.rev).subscribe();
    }
    this.modalService.hide(1);
  }
  setreview() {
    if ( this.rev.comment === undefined) {
      this.firstTime = true;
    } else  {
      this.firstTime = false;
    }
  }
  toggleUpload() {
    if ( this.uploadPage === false) {
      this.uploadPage = true;
      this.uploadButton = 'back';
    } else {
      this.uploadButton = 'upload photo';
      this.uploadPage = false;
    }
  }
}
