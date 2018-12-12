import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class Form {
    private connectionstring: string;
    constructor(private http: HttpClient) {

    }

    getimages(): Observable<number> {
        return this.http.get<number>(this.connectionstring);
    }
}
