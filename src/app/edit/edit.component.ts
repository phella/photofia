import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { AuthencationService } from '../authencation.service';
import { Photographer } from '../models/photographer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  privilege = 1;
  model = new Photographer();
  places: string[];
  response: string;
  constructor(private es: EventsService, private route: ActivatedRoute, private as: AuthencationService) { }

  ngOnInit() {
    this.es.getCities().subscribe( cities => {
      this.places = cities;
    });
    this.es.getprev(this.route.snapshot.params['id']).subscribe(
      prev => { this.privilege = prev ;
      if (this.privilege === 1) {
        this.es.getphotographer(this.route.snapshot.params['id']).subscribe( ph => this.model = ph);
    } else {
      this.es.getCustomer(this.route.snapshot.params['id']).subscribe(cs => {
        this.model.username = cs.userName;
        this.model.birthDate = cs.birthDate;
        this.model.gender = cs.gender;
        this.model.userAddress = cs.userAddress;
        this.model.userPhone = cs.userPhone;
      });
    }
  }
    );
  }
  update() {
    this.es.updateProfile(this.route.snapshot.params['id'], this.model).subscribe(
      resp => { this.response = resp.toString() ; }
    );
  }
}
