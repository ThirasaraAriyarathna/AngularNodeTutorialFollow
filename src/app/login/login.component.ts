import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any = [];
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

}
