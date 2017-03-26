import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';
import { LoginComponent } from './login/login.component';
import { routing } from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { LoginService } from "./login.service";
import { SignupComponent } from './components/signup/signup.component';
import { SignupService } from "./services/signup.service";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
  ],
  providers: [PostsService, LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
