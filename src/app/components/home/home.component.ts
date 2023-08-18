import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Card} from "../../models/card";
import {CardService} from "../../services/card.service";
import {Payment} from "../../models/payment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;
  cards: Observable<Card[]>;
  payments: Observable<Payment[]> = new Observable<Payment[]>();
  // payments: Observable<Payment[]>

  constructor(private router: Router, private authService: AuthService, private cardService: CardService) {
    this.user = this.authService.getCurrentUser();
    this.cards = this.cardService.findCardsByCurrentUser();
  }

  ngOnInit(): void {
    console.log(this.authService.getPhoneNumber());
    console.log(this.authService.getRole());
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then(() =>
      console.log('Navigation to /home completed')
    );
  }

  transaction() {
    this.router.navigate(['/transaction']).then(() =>
      console.log('Navigation to /transaction completed')
    );
  }

  handleData($event: any) {
    this.payments = $event;
  }
}
