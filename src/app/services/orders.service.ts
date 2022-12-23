import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http: HttpClient) { }

  //To fetch all the orders from json file located in assets
  getOrders(): Observable<IOrder[]> {
    return this._http.get<IOrder[]>('../../assets/data.json').pipe(map(res => res));
  }

}
