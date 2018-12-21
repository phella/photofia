import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import {tap, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../environments/environment';
import { CookieService } from 'angular2-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthencationService implements CanActivate {
  is_Auth: boolean;
  date = new Date();
  currentUser = new User();
  env = environment;
  prev = 1; // 1 for photographer
  constructor(private router: Router, private http: HttpClient, private cookie: CookieService) {
    this.is_Auth = true;
    this.currentUser.firstname = 'khaled moataz';
    this.currentUser.email = this.env.email;
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
    login(log) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})} ;
      return this.http.post('/api/login', log , options ).pipe( tap(data => {
        this.currentUser = <User>data['user'];
      }))
      .pipe(catchError(err => {
        return of (false );
      }));
    }
   checkAuthStatus() {
    return this.http.get('/api/currentStatus').pipe(tap(data => {
       if (data instanceof Object) {
         this.currentUser = <User> data;
      }}));
        }
   }
