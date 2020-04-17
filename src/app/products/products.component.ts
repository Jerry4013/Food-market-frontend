import { Component, OnInit } from '@angular/core';
export interface Tile {
  provider: string;
  price: number;
  src: string;
  title: string;
}

export interface Header {
  cols: number;
  rows: number;
  img: string;
  text: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  headerTile: Header = {
    cols: 1, rows: 2,  text: 'Appetizer',
    img: 'url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023124072,3120619442&fm=26&gp=0.jpg)'
  };
  tiles: Tile[] = [
    {title: '煎饼果子', provider: '一个煎饼侠', price: 8.99,
      src: 'http://www.meilipx.com/UpFile/201806/2018061231170133.jpg'},
    {title: '煎饼果子', provider: '一个煎饼侠', price: 8.99,
      src: 'https://cp1.douguo.com/upload/caiku/c/4/2/690x390_c456483d7aa1f91fd769692fc0dba072.jpg'},
    {title: '煎饼果子', provider: '一个煎饼侠', price: 8.99,
      src: 'https://cp1.douguo.com/upload/caiku/c/4/2/690x390_c456483d7aa1f91fd769692fc0dba072.jpg'},
    {title: '煎饼果子', provider: '一个煎饼侠', price: 8.99,
      src: 'https://cp1.douguo.com/upload/caiku/c/4/2/690x390_c456483d7aa1f91fd769692fc0dba072.jpg'},
    {title: '煎饼果子', provider: '一个煎饼侠', price: 8.99,
      src: 'https://cp1.douguo.com/upload/caiku/c/4/2/690x390_c456483d7aa1f91fd769692fc0dba072.jpg'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    // {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
