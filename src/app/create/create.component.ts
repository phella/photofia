import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FForm } from '../services/Form.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private forrm: FForm) {

   }
  bd = new Date('jan 1 2017');
  model = new User('', '', '', null , '', 'gender', 'maadi', this.bd, '');
  submitForm(form: NgForm) {
    this.forrm.postEmployeeForm(this.model);
  }
  ngOnInit() {
  }

}
