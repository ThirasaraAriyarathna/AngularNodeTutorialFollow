import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import {SignupService} from "../../services/signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();

  isShow = false;
  success = false;
  class = {'alert-success': false, 'alert-danger': false};
  message: string;

  constructor(private signupService: SignupService, private router: Router) {

  }

  ngOnInit() {
  }

  register(event){
    event.preventDefault();
    this.signupService.register(this.user).subscribe(data => {
      console.log(data.message);
      if (data.success){
        this.class['alert-success'] =true;
        this.class['alert-danger'] =false;
        this.isShow = true;
        this.message = data.message;
        this.router.navigate(['/login']);
      }
      else{
        this.class['alert-danger'] =true;
        this.class['alert-success'] =false;
        this.isShow = true;
        this.message = data.message;


      }
    }, error => {
      alert(error);
    });


  }

}
