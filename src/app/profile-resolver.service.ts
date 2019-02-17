import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './services/events.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<number> {

  constructor(private es: EventsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> {
      const id = route.paramMap.get('id');
      return this.es.getprev(id);
  }
}
