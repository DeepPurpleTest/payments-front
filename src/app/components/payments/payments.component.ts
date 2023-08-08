import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Payment} from "../../models/payment";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  @Input() payments: Observable<Payment[]> = new Observable<Payment[]>();
}
