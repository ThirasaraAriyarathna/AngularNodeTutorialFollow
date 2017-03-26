import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  getAllUsers(){
    return this.http.get('user/login').map(res => res.json());
  }
}
