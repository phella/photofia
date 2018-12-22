import { Component, OnInit } from '@angular/core';
import { AuthencationService } from '../authencation.service';
import { Router } from '@angular/router';
import { LogIn } from '../models/logIn.model';
import { environment } from '../../environments/environment';
import {CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent  {
  login = new LogIn('', '');
  invalid = false;
  env = environment;
  constructor(private as: AuthencationService, private route: Router, private cookie: CookieService) {
   }
  signin() {
    this.as.login(this.login).subscribe(resp => {
      if (resp === null) {
        this.invalid = true;
      } else {
      this.cookie.put('email', this.login.userEmail );
      this.as.currentUser.email = this.login.userEmail;
      this.route.navigate(['home']);
      }
    });
  }
}
