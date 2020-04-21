import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductCategoryVoModel} from '../../models/product-category-vo.model';
import {ErrorModel} from '../../models/error.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductCategoryVoModel[];
  errMsg: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.listAllForSale().subscribe( response => {
      if (response.status === 'success' ) {
        this.products = response.data as ProductCategoryVoModel[];
      } else {
        this.errMsg = (response.data as ErrorModel).errMsg;
      }
    });
  }
}
