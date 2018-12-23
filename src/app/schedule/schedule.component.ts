import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AuthencationService } from '../authencation.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  day: string;
  selectedHour: number[] = new Array(24);
  flag = false;
  counter: number[] = new Array(12);
  checkBoxes1: boolean[] = new Array(12) ;
  checkBoxes2: boolean[] = new Array(12) ;
  constructor(private es: EventsService, private at: AuthencationService) {
   }

  ngOnInit() {
    for ( let i = 0; i < 12 ; i++) {
      this.counter[i] = i + 1;
    }
    for ( let i = 0; i < 24 ; i++) {
      this.selectedHour[i] = -1;
    }
  }
  close() {
    if ( this.day === 'Friday') {
      this.day = 'Saturday';
    } else {
      this.day = 'Friday' ;
    }
    this.es.setSchedule(this.at.currentUser.email, this.day , this.selectedHour).subscribe( );
  }
  deleteAdd(i: number ) {
    for ( const num of this.selectedHour) {
      if ( i  === num ) {
        this.selectedHour[i] = -1;
        this.flag = true;
      }
    }
    if ( this.flag === false) {
      this.selectedHour[i] = i ;
    }
    this.flag = false;
  }
}
