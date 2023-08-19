import {Component, Input} from '@angular/core';
import {Payment} from "../../models/payment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  @Input() payments: Payment[] = {} as Payment[];


  constructor(private router: Router) {
  }

  paymentDetails(id: any) {
    this.router.navigate(['/payment/' + id]).then(() =>
      console.log('Navigation to /payment-details completed')
    );
  }
}
