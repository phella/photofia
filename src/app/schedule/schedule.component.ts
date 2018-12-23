import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  day: string;
  selectedHour: number[];
  flag = false;
  constructor() { }

  ngOnInit() {
  }
  close() {
    if ( this.day === 'Friday') {
      this.day = 'Saturday ';
    } else {
      this.day = 'Friday' ;
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
      this.selectedHour[i] = i ;
    }
    this.flag = false;
  }
}
