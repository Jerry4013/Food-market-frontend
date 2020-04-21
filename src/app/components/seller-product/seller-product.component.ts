import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  image: number;
  price: string;
  stock: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'fish', image: 3, price: '4.0', description: 'yumy', stock: '3'},
  {position: 2, name: 'bird', image: 6, price: '7.0', description: 'eh', stock: '0'}
];

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.scss']
})
export class SellerProductComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'image', 'price', 'description', 'stock', 'modify', 'outofstock'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.router.navigate(['/addproduct']).then();
  }
}
