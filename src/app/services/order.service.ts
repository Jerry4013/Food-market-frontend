import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ReturnModel} from '../models/return.model';
import {environment} from '../../environments/environment';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  listByBuyer(buyerId: number) {
    let myParams = new HttpParams();
    myParams = myParams.append('buyerId', String(buyerId));
    return this.http
      .get<ReturnModel>(
        environment.baseUrl + environment.order + environment.listByBuyer,
        {
          headers: new HttpHeaders({ 'withCredentials': 'true'}),
          params: myParams
        }
      );
  }
}
