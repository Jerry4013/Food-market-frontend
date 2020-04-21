import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './default/default.component';
import {LoginComponent} from './components/user/login/login.component';
import {SignupComponent} from './components/user/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import {PasswordComponent} from './components/user/password/password.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {BuyerOrdersComponent} from './components/buyer-orders/buyer-orders.component';
import {SellerProductComponent} from './components/seller-product/seller-product.component';
import {AddProductComponent} from './components/add-product/add-product.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'pwd', component: PasswordComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'buyerorders', component: BuyerOrdersComponent},
      {path: 'sellerproducts', component: SellerProductComponent},
      {path: 'addproduct', component: AddProductComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
