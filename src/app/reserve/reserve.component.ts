import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import { EventsService } from '../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthencationService } from '../authencation.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reserveTime = new Date( 'oct 1 2018 0:00 am');
  hours: number[];
  numbers: number[];
  selectedHour: number[] = new Array(24);
  counter: number[] = new Array(12);
  enable: boolean;
  test: number;
  checkBoxes1: boolean[] = new Array(12) ;
  checkBoxes2: boolean[] = new Array(12) ;
  flag = false;
  constructor(private es: EventsService, private route: ActivatedRoute , private at: AuthencationService, private datepipe: DatePipe) {
  }
  ngOnInit() {
    for ( let i = 0; i < 12 ; i++) {
      this.counter[i] = i + 1;
    }
    for ( let i = 0; i < 24 ; i++) {
      this.selectedHour[i] = -1;
    }
  }
request() {
    // tslint:disable-next-line:max-line-length
    this.es.requesttime(this.route.snapshot.params['id'] , this.at.currentUser.email, this.datepipe.transform(this.reserveTime, 'yyyy-MM-dd'), this.selectedHour).subscribe();
  }
  getHours() {
     // this.reserveTime | date: 'yyyy-MM-dd';
    this.es.getHours(this.route.snapshot.params['id'] ,  this.datepipe.transform(this.reserveTime, 'yyyy-MM-dd')).subscribe(
      hours => { this.enableAll()  ; this.hours = hours  ; this.enableCheckBoxes();  } );
      this.enable = false;
  }
  enableCheckBoxes() {
    for ( let i = 0 ; i < 12 ; i++) {
      for ( const hr of this.hours) {
        if ( hr === i) {
          this.checkBoxes1[i] = true;
        }
      }
    }
    for ( let i = 12 ; i < 24 ; i++) {
      for ( const hr of this.hours) {
        if ( hr === i) {
          this.checkBoxes2[i - 12] = true;
        }
      }
    }
  }
  enableAll() {
    for ( let i = 0 ; i < 12 ; i++) {
      this.checkBoxes1[i] = false;
    }
    for ( let i = 0 ; i < 12 ; i++) {
      this.checkBoxes2[i] = false;
    }
  }
  deleteAdd(i: number ) {
    for ( const num of this.selectedHour) {
      if ( i  === num ) {
        this.selectedHour[i] = -1;
        this.flag = true;
      }
    }
    if ( this.flag === false) {
      this.selectedHour[i ] = i ;
    }
    this.flag = false;
  }
}
