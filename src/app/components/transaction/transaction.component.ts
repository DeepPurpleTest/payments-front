import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CardService} from "../../services/card.service";
import {Observable} from "rxjs";
import {Card} from "../../models/card";
import {PaymentService} from "../../services/payment.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  cards: Observable<Card[]>;
  paymentForm = this.builder.group({
    sender: ['', Validators.required],
    receiver: ['', Validators.required],
    amount: [0, Validators.required]
  });

  constructor(private router: Router, private builder: FormBuilder,
              private cardService: CardService, private paymentService: PaymentService) {
    this.cards = this.cardService.findCardsByCurrentUser();
  }

  createTransaction() {
    if (this.paymentForm.valid) {
      this.paymentService.createTransaction(this.paymentForm.value).subscribe({
        next: (data) => {
          const responseId = data.id;
          this.router.navigate(['/success/' + responseId]).then(() =>
            console.log('Navigation to /success completed'));
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    } else {
      console.log('Invalid for data');
    }
  }

}
