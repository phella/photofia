import { Injectable } from '@angular/core';
import { Http , HttpModule} from '@angular/http';
import { User } from '../models/user.model';
import { HttpClient } from 'selenium-webdriver/http';
@Injectable()
export class FForm {
    constructor() {

    }
    postEmployeeForm (user: User) {
        console.log('user information:', user);
    }
}
