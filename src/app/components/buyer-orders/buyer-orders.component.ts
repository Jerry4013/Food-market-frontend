import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {AuthService} from '../../services/auth.service';
import {UserModel} from '../../models/user.model';
import {ErrorModel} from '../../models/error.model';
import {Order} from '../../models/order.model';

@Component({
  selector: 'app-buyer-orders',
  templateUrl: './buyer-orders.component.html',
  styleUrls: ['./buyer-orders.component.scss']
})
export class BuyerOrdersComponent implements OnInit {
  user: UserModel;
  errMsg: string;
  orderList: Order[];

  constructor(private orderService: OrderService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.orderService.listByBuyer(this.user.id).subscribe(response => {
      if (response.status === 'success' ) {
        this.orderList = response.data as Order[];
        console.log(this.orderList);
      } else {
        this.errMsg = (response.data as ErrorModel).errMsg;
      }
    });
  }

}
