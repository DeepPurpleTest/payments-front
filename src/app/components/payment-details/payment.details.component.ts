import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../services/payment.service";
import {Payment} from "../../models/payment";
import {ActivatedRoute} from "@angular/router";
import {ReceiptService} from "../../services/receipt.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogReceiptComponent} from "../receipt/dialog-receipt.component";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment.details.component.html',
  styleUrls: ['./payment.details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  public payment: Payment = {} as Payment;
  id: string;
  pdfDocumentPath: string = 'document.pdf';
  pdf = '';

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private paymentService: PaymentService, private receiptService: ReceiptService) {
    const idFromParam = this.route.snapshot.paramMap.get('id');
    this.id = idFromParam !== null ? idFromParam : '';

  }

  ngOnInit(): void {
    this.paymentService.findOne(this.id).subscribe({
      next: (data) => {
        this.payment = data;
        console.log(this.payment);
        console.log('success get payment');
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  openDialog() { //todo
    console.log('Before open dialog! ' + this.id);
    this.receiptService.getReceipt(this.payment.id).subscribe({
      next: (data) => {
        let blob: Blob = data as Blob;
        let url = window.URL.createObjectURL(blob); // create temporary url for pdf file like he is on server window.URL.createObjectURL(blob)
        //window.open(url);
        this.dialog.open(DialogReceiptComponent, {data: {url: url}});
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

}
