import {Component, Input} from '@angular/core';
import {Payment} from "../../models/payment";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  @Input() payments: Payment[] = {} as Payment[];
}
