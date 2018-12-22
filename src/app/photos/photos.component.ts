import { Component,  Input, SimpleChanges, TemplateRef, OnInit } from '@angular/core';
import {Images} from '../models/Images.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EventsService} from '../services/events.service';
import {ActivatedRoute} from '@angular/router';
import { AuthencationService } from '../authencation.service';
import { Review } from '../models/review.model';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private modalService: BsModalService, private es: EventsService, private route: ActivatedRoute, private at: AuthencationService) { }
  modalRef: BsModalRef;
  base = 'http://169.254.137.164/images/' ;
  pageNumber = 1;
  orderBy = '/time/';
  images: Images[] = [  ];
  imagePath: string ;
  selected: boolean[] = new Array(5);
  rev = new Review();
  firstTime: boolean;
  reviews: Review[];
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>, path: string) {
    this.modalRef = this.modalService.show(template);
    this.imagePath = this.base + path + '.jpg' ;
    this.es.getPhotoReviews(this.route.snapshot.params['id'], path).subscribe(
      rev => { this.reviews = rev ; }
    );
    this.es.getCurrentPhotoReview(this.route.snapshot.params['id'], this.at.currentUser.email,path).subscribe(
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
    for
    ( let i = 0 ; i < 5 ; i++) {
      if ( this.selected[i] === true) {
        this.rev.rate = i + 1;
      }
    }
    if (this.firstTime === true) {
    this.es.reviewPhoto(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev ).subscribe();
    } else {
      this.es.updateReviewPhoto(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev).subscribe();
    }
  }
  setreview() {
    if ( this.rev.comment == null) {
      this.firstTime = true;
    } else  {
      this.firstTime = false;
      this.selected[this.rev.rate - 1] = true;
    }
  }
}