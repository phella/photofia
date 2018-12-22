import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AuthencationService } from '../authencation.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  selected: boolean[] = new Array(5);
  rev: Review;
  firstTime: boolean;
  constructor(private es: EventsService, private at: AuthencationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.es.getCurrentReview(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe(
      review => {this.rev = review ; this.setreview(); }
    );
  }
  rate() {
    for
    ( let i = 0 ; i < 5 ; i++) {
      if ( this.selected[i] === true) {
        this.rev.rate = i + 1;
      }
    }
    if (this.firstTime === true) {
    this.es.reviewPhotographer(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev ).subscribe();
    } else {
      this.es.updateReviewPhotographer(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev).subscribe();
    }
  }
  setreview() {
    if ( this.rev  === undefined) {
      this.firstTime = true;
    } else  {
      this.firstTime = false;
      this.selected[this.rev.rate - 1] = true;
    }
  }
}
