import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IOrder } from 'src/app/interfaces/IOrder';

@Component({
  selector: 'app-add-order-dialog',
  templateUrl: './add-order-dialog.component.html',
  styleUrls: ['./add-order-dialog.component.scss']
})
export class AddOrderDialogComponent implements OnInit {

  //@ts-ignore
  orderForm: FormGroup;

  constructor(private _dialogRef: MatDialogRef<AddOrderDialogComponent>,
    private _fb: FormBuilder) {

    //Initializing the form
    this.orderForm = this._fb.group({
      orderId: [""],
      transactionNumber: [""],
      date: [null, Validators.required],
      amount: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  addOrder(order: IOrder) {
    //To check the validations
    if (!this.orderForm.valid) {
      this.orderForm.controls['orderDate'].markAsTouched();
      this.orderForm.controls['amount'].markAsTouched();
      return;
    }
    order.orderId = this.generateRandomString(3);
    order.transactionNumber = this.generateRandomString(3);
    this._dialogRef.close(order);
  }

  //Generates a random string for ID purpose
  generateRandomString(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }



}
