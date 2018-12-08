import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthencationService implements CanActivate {
  is_Auth = false;
  constructor(private router: Router) { }
  canActivate()  {
    if (!this.is_Auth) {
      this.router.navigate(['/sign']);
      return false;
     } else {
       return true;
     }
  }
}
