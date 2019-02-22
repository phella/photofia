import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './services/events.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, OnInit {
  prev: number;
  constructor(private es: EventsService) {}
  ngOnInit() {
    // get user email
    this.es.getprev('philo@yahoo.com').subscribe(prev => {
      this.prev = prev ;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( this.prev === 2) {
        return true ;
    } else {
      return false;
    }
  }
}
