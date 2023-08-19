import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../services/payment.service";
import {Payment} from "../../models/payment";
import {ActivatedRoute} from "@angular/router";
import {ReceiptService} from "../../services/receipt.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogReceiptComponent} from "../receipt/dialog-receipt.component";
import {DateFormatterService} from "../../util/dateformatter/date.formatter.service";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment.details.component.html',
  styleUrls: ['./payment.details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  public payment: Payment = {} as Payment;
  url: string = '';
  id: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private paymentService: PaymentService, private receiptService: ReceiptService, private dateFormatterService: DateFormatterService) {
    const idFromParam = this.route.snapshot.paramMap.get('id');
    this.id = idFromParam !== null ? idFromParam : '';

  }

  ngOnInit(): void {
    this.loadPayment();
    this.loadReceipt();
    console.log(this.payment.date)
  }

  loadPayment() {
    this.paymentService.findOne(this.id).subscribe({
      next: (data: Payment) => {
        this.payment = data;
        this.payment.date = this.dateFormatterService.formatDate(data.date);
        console.log('success get payment');
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  loadReceipt() {
    this.receiptService.getReceipt(this.id).subscribe({
      next: (data) => {
        this.url = window.URL.createObjectURL(data); // create temporary url for pdf file like he is on server window.URL.createObjectURL(blob)
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  openDialog() {
    this.dialog.open(DialogReceiptComponent, {
      width: '90%',
      data: {
        url: this.url,
      }
    });
  }

  downloadPdf() {
    this.receiptService.getReceipt(this.payment.id).subscribe({
      next: (data) => {
        const url = window.URL.createObjectURL(data); // create temporary url for pdf file like he is on server window.URL.createObjectURL(blob)
        
        const link = document.createElement('a'); // create new reference element a
        link.href = url; // add rj link temporary url of pdf
        link.download = 'receipt.pdf'; // add name of saved pdf

        document.body.append(link); // add element to body of my html
        link.click(); // click on reference
        link.remove() // delete element from body

      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

}
