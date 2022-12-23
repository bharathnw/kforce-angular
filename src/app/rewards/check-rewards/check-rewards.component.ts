import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/interfaces/IOrder';
import { AddOrderDialogComponent } from '../add-order-dialog/add-order-dialog.component';

@Component({
  selector: 'app-check-rewards',
  templateUrl: './check-rewards.component.html',
  styleUrls: ['./check-rewards.component.scss']
})
export class CheckRewardsComponent implements OnInit {

  orders: IOrder[] = [];
  constructor(private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog, 
    private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    //Fetching initial data from the resolver
    this.fetchResolverData();
  }


  fetchResolverData() {
    this._activatedRoute.data.subscribe(
      data => {
        this.orders = data['resolverData']['transactions'];
      }
    )
  }

  //To add a new order 
  openOrderDialog(): void {
    //Opening a modal
    this._dialog.open(AddOrderDialogComponent, {
      autoFocus: false,
      disableClose: true
    }).afterClosed().subscribe(
      data => {
        this.addOrder(data)
      }
    )
  }

  addOrder(order: IOrder): void {
    this.orders.push(order);
    this._snackBar.open("Order placed successfully","",{duration: 1000});
  }


}
