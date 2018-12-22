import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import {tap, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../environments/environment';
import { CookieService } from 'angular2-cookie';
import { LogIn } from './models/logIn.model';

@Injectable({
  providedIn: 'root'
})
export class AuthencationService implements CanActivate {
  is_Auth: boolean;
  date = new Date();
  currentUser = new User();
  env = environment;
  prev = 1; // 1 for photographer
  private base = 'http://169.254.137.164/api/';
  constructor(private router: Router, private http: HttpClient, private cookie: CookieService) {
    this.is_Auth = true;
    this.currentUser.email = this.cookie.get('email');
   }
  canActivate()  {
    if (!this.is_Auth) {
      this.router.navigate(['/sign']);
      return false;
     } else {
       return true;
     }
    }
    login(log: LogIn) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})} ;
      return this.http.post(this.base + 'login', log , options );
    }
   }
