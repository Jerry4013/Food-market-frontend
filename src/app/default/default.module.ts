import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { DefaultComponent } from './default.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from '../components/user/login/login.component';
import { SignupComponent } from '../components/user/signup/signup.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HomeComponent } from '../components/home/home.component';
import {CategoryComponent} from '../components/category/category.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexModule} from '@angular/flex-layout';
import { PasswordComponent } from '../components/user/password/password.component';
import {AuthService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from '../components/user/profile/profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BuyerOrdersComponent } from '../components/buyer-orders/buyer-orders.component';
import {OrderService} from '../services/order.service';
import {MatListModule} from '@angular/material/list';
import {OrderstatusPipe} from '../pipes/orderstatus.pipe';
import { SellerProductComponent } from '../components/seller-product/seller-product.component';
import {MatTableModule} from '@angular/material/table';
import { AddProductComponent } from '../components/add-product/add-product.component';
import {MatSelectModule} from '@angular/material/select';
import {ProductService} from '../services/product.service';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CategoryComponent,
    PasswordComponent,
    ProfileComponent,
    BuyerOrdersComponent,
    OrderstatusPipe,
    SellerProductComponent,
    AddProductComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    FlexModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    OrderService,
    ProductService,
    // AuthGuardService,
    DatePipe
  ],
})
export class DefaultModule { }
