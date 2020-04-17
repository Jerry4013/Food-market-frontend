import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CategoryModule} from '../category/category.module';
import {ProductsModule} from '../products/products.module';
import { LoginComponent } from '../user/login/login.component';
import { SignupComponent } from '../user/signup/signup.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HomeComponent } from '../components/home/home.component';




@NgModule({
  declarations: [DefaultComponent, LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    CategoryModule,
    ProductsModule,
    MatButtonToggleModule
  ]
})
export class DefaultModule { }
