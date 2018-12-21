import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[];
  constructor(private es: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.es.getReviews(this.route.snapshot.params['id']).subscribe(
      rev => { this.reviews = rev ; }
    );
  }

}
