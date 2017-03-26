import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../models/User";

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  register(user: User){
    var header = new Headers();
    var success: string;
    header.append('Content-Type','application/json');
    return this.http.post('/api/signup', user, {headers: header}).map(res => res.json());
  }

}
