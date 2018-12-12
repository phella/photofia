import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Images } from '../models/Images.model';
import {catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {

   }
   getimages(): Observable<Images[]> {
    return this.http.get<Images[]>('/api/images')
    .pipe(catchError(this.handleError<Images[]>('getimages', [])));
   }
   private handleError<T>(operation= 'operation', result?: T) {
     return(error: any): Observable<T> => {
       console.error(Error);
       return of (result as T);
     };
   }
  }
