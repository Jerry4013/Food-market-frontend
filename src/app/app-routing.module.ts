import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './default/default.component';
import {LoginComponent} from './components/user/login/login.component';
import {SignupComponent} from './components/user/signup/signup.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
