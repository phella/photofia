import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Images } from '../models/Images.model';
import { Photographer } from '../models/photographer';
import { Customer } from '../models/Customer.model';
import { Notifi } from '../models/Notification.model';
import { Event } from '../models/Event.model';
import { Place } from '../models/place.model';
import { Camera } from '../models/camera.model';
import { Review } from '../models/review.model';
import { Lens } from '../models/lens.model';
import { Gift } from '../models/Gift.model';
import { Options } from 'selenium-webdriver';
import { Charts } from '../models/Charts.model';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
    private base = 'http://169.254.137.164/api/';

  // private base = 'http://localhost/api/';
  // private base = 'http://192.168.137.1:8080/photofia-database-project/public/api/';
  constructor(private http: HttpClient) {
   }
   getImagesPhotographer(id: string , currentUser: string, orderBy: string, pageNumber: number): Observable<Images[]> {
    return this.http.get<Images[]>(this.base + 'images/' + id + '/' + currentUser  + orderBy  + pageNumber);
   }
   getImagesOfPlace(place: String): Observable<Images[]> {
    return this.http.get<Images[]>(this.base + 'getAllIamges/' + place );
   }
   getphotographer(id: string ): Observable<Photographer> {
    return this.http.get<Photographer>(this.base + 'photographer/' + id );
   }
   getCustomer(id: string ): Observable<Customer> {
    return this.http.get<Customer>( this.base + 'customer/' + id );
   }
   requesttime(id: string, currentUser: string , t: string, selectedHours: number[]) {
   const fv = {headers: new HttpHeaders({'Content-Type':  'application/json'})} ;
   return this.http.post<any>(this.base + 'photographer/' + id + '/' + currentUser + '/' + t, selectedHours, fv );
   }
   saveform(obj: any) {
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})} ;
    return this.http.post<any>(this.base + 'profile', obj, options );
    }
    EventsApplications(id: string): Observable<Notifi[]> {
      return this.http.get<Notifi[]>(this.base + 'eventsApplications/' + id);
    }
    customerReserve(id: string): Observable<Notifi[]> {
      return this.http.get<Notifi[]>(this.base + 'customersReserves/' + id);
    }
    getHours(id: string, tim: string): Observable<number[]> {
      return this.http.get<number[]>(this.base + 'photographer/' + id + '/' + tim );
    }
    respondEvent(eventid: number, email: string, accepted: number) {
      const obj = { id: Number() , photographerEmail: String(), accepted: Number()};
      obj.id = eventid;
      obj.photographerEmail = email;
      obj.accepted = accepted;
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})} ;
      return this.http.post(this.base + 'updateEventNotification', obj, options);
    }
    getprev(id: String): Observable<number> {
      return this.http.get<number>(this.base + 'user/' + id);
    }
    getFollowStatus( id: string, currentUsser: string): Observable<number> {
      return this.http.get<number>( this.base + 'user/' + id + '/' + currentUsser);
    }
    follow(id: string, currentUsser: string): Observable<number> {
      return this.http.get<number>(this.base + 'follow/' + id + '/' + currentUsser);
    }
    unfollow(id: string, currentUsser: string): Observable<number> {
      return this.http.get<number>(this.base + 'unfollow/' + id + '/' + currentUsser);
    }
    updateProfile(id: string, ph: Photographer): Observable<string> {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})} ;
      return this.http.post<string>(this.base + 'updateUser', ph , options);
    }
    applyEvent(eventId: number , currentUser: string ) {
      return this.http.get(this.base + 'applyEvent/' + eventId + '/' + currentUser);
    }

    getEvents(id: string): Observable<Event[]> {
     return this.http.get<Event[]>(this.base + 'appliableEvents/' + id);
    }
    getCities(): Observable<string[]> {
      return this.http.get<string[]>(this.base + 'getplaces' );
    }
    createEvent(id: string, _event: Event) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post<Event>(this.base + 'createEvent/' + id, _event, options);
    }
    getPlaces(): Observable<Place[]> {
      return this.http.get<Place[]>(this.base + 'getAllPlaces');
    }
    getPhotosHome(id: string): Observable<Images[]> {
      return this.http.get<Images[]>(this.base + 'images/follow/' + id + '/time/1');
    }
    getPhotographerCameras(id: string): Observable<Camera[]> {
      return this.http.get<Camera[]>(this.base + 'getPhotographerCameras/' + id );
    }
    getPhotographerLenses(id: string): Observable<Lens[]> {
      return this.http.get<Lens[]>(this.base + 'getPhotographerLenses/' + id );
    }
    getReviews(id: string ): Observable<Review[]> {
      return this.http.get<Review[]>(this.base +  'photographer/reviews/' + id);
    }
    getPhotoReviews(id: string, path: string ): Observable<Review[]> {
      return this.http.get<Review[]>(this.base + 'image/reviews/' + path);
    }
    reviewPhotographer(id: string , currentUser: string , rev: Review) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post<string>(this.base + 'photographer/reviewPost/' + id + '/' + currentUser, rev , options);
    }
    updateReviewPhotographer(id: string , currentUser: string , rev: Review) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json' })};
      return this.http.post(this.base + 'photographer/updateReview/' + id + '/' + currentUser, rev , options);
    }
    getCurrentReview(id: string, currentUser: string): Observable<Review> {
      return this.http.get<Review>(this.base + 'photographer/review/' + id + '/' + currentUser);
    }
    getCustomerPoints(id: string): Observable<number> {
      return this.http.get<number>(this.base + 'getCustomerPoints/' + id);
    }
    getGifts(): Observable<Gift[]> {
      return this.http.get<Gift[]>(this.base + 'getAllGifts' );
    }
    redeem(id: string, giftName: Gift) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post<string>(this.base + 'redeemGift/' + id , giftName , options);
    }
    customerFollowers(id: string): Observable<Notifi[]> {
     return this.http.get<Notifi[]>(this.base + 'customersFollows/' + id);
    }
    uploadProfilePicture(id: string, selectedFile: File) {
      const fd = new FormData();
      fd.append('image', selectedFile , selectedFile.name);
     return this.http.post(this.base + 'profile/profilePicture/' + id , selectedFile );
    }
    getCurrentPhotoReview(currentUser: string, path: string): Observable<Review> {
      return this.http.get<Review>(this.base + 'images/review/' + currentUser + '/' + path);
    }
    reviewPhoto(path: string , currentUser: string , rev: Review) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post<string>(this.base + 'images/review/' + currentUser + '/' + path, rev , options);
    }
    updateReviewPhoto(path: string , currentUser: string , rev: Review) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post(this.base + 'images/updateReview/' + currentUser + '/' + path, rev , options);
    }
    getCharts(): Observable<Charts[]> {
      return this.http.get<Charts[]>(this.base + 'statistics/eventsPlaces');
    }
    getAllCams(): Observable<Camera[]> {
      return this.http.get<Camera[]>(this.base + 'getAllCameras');
    }
    getAllLenses(): Observable<Lens[]> {
      return this.http.get<Lens[]>(this.base + 'getAllLens');
    }
    selectCam(id: string , cam: string) {
      return this.http.get(this.base + 'selectCam/' + id + '/' + cam );
    }
    selectLens(id: string , lens: string) {
      return this.http.get(this.base + 'selectLens/' + id + '/' + lens );
    }
    setSchedule( id: string, day: number, hours: number[] ) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post(this.base + 'photographer/schedule/' + id + '/' + day , hours , options);
    }
    addNewPlace(place: Place) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post(this.base, place, options);
    }
    promote(id: string) {
      return this.http.get(this.base + id);
    }
    addGift(giftName: string, giftPoints: number ) {
      return this.http.get(this.base + giftName + '/' + giftPoints);
    }
    insertCamera(camera: Camera) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post(this.base + 'camera/insert' , camera , options);
    }
    insertLens(lens: Lens) {
      const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
      return this.http.post(this.base + 'insertLens' , lens , options);
    }
  }
