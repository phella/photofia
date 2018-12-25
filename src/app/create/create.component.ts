import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {EventsService} from '../services/events.service';
import { Router } from '@angular/router';
import { AuthencationService } from '../authencation.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor( private es: EventsService, private router: Router, private a: AuthencationService) {

   }
  bd = new Date('jan 1 2017');
  model = new User();
  cities: string[];
  submitForm() {
    this.es.saveform(this.model).subscribe(() => {
     this.router.navigate(['/sign']);
    });
  }
  ngOnInit() {
    this.es.getCities().subscribe(
      cities => {this.cities = cities ; }
    );
  }

}
