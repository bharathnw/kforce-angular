import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { IOrder } from "../interfaces/IOrder";
import { OrdersService } from "../services/orders.service";

@Injectable({ providedIn: 'root' })
export class RewardsResolver implements Resolve<any> {
    constructor(private _orderService: OrdersService) {
    }
    resolve(): Observable<IOrder[]> | Promise<any> | any {
        return this._orderService.getOrders();
    }
}