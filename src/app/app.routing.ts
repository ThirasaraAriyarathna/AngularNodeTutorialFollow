import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PostsComponent} from "./posts/posts.component";
import {SignupComponent} from "./components/signup/signup.component";
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'signup', component: SignupComponent }
];

export  const routing = RouterModule.forRoot(APP_ROUTES);
