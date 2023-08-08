import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CardService} from "../../services/card.service";
import {Observable} from "rxjs";
import {Card} from "../../models/card";
import {Payment} from "../../models/payment";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  payment: Payment = {} as Payment;
  cards: Observable<Card[]>;

  constructor(private router: Router, private cardService: CardService, private paymentService: PaymentService) {
    this.cards = this.cardService.findCardsByCurrentUser();
  }

  createTransaction() {
    this.paymentService.createTransaction(this.payment).subscribe({
      next: (data) => {
        this.router.navigate(['/success/' + this.payment.id]).then(() =>
          console.log('Navigation to /home completed'));
      },
      error: (error) => {
        console.error('Error:', error.body);
      }
    });
  }

}
