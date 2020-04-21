import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReturnModel} from '../models/return.model';
import {environment} from '../../environments/environment';
import {ProductModel} from '../models/product.model';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(productModel: ProductModel) {
    return this.http
      .post<ReturnModel>(
        environment.baseUrl + environment.dish,
        productModel,
        {
          headers: new HttpHeaders({ 'withCredentials': 'true'}),
        }
      );
  }

  findAllCategory() {
    return this.http
      .get<ReturnModel>(
        environment.baseUrl + environment.category + environment.all,
        {
          headers: new HttpHeaders({ 'withCredentials': 'true'}),
        }
      );
  }

  listAllForSale() {
    return this.http
      .get<ReturnModel>(
        environment.baseUrl + environment.dish + environment.all,
        {
          headers: new HttpHeaders({ 'withCredentials': 'true'}),
        }
      );
  }
}
