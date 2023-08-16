import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../services/payment.service";
import {Payment} from "../../models/payment";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Observable<Payment> = new Observable<Payment>();

  constructor(private route: ActivatedRoute, private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.payment = this.paymentService.findOne(id);
  }

  receipt() { //todo

  }

}
