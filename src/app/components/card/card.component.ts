import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../models/card";
import {Observable} from "rxjs";
import {Payment} from "../../models/payment";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card = {} as Card;
  payments: Observable<Payment[]> = new Observable<Payment[]>();
  @Output() dataEvent = new EventEmitter<any>();
  public showComponent: boolean;

  constructor(private paymentsService: PaymentService) {
    this.showComponent = false;
  }

  sendPayments() {
    this.dataEvent.emit(this.payments);
  }

  toggleCard() {
    this.showComponent = !this.showComponent;
  }

  ngOnInit(): void {
    this.payments = this.paymentsService.findPaymentsByCard(this.card);
  }
}
