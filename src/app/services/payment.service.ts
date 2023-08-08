import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Card} from "../models/card";

@Injectable()
export class PaymentService {
  clientPaymentUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.clientPaymentUrl = 'http://localhost:8080/client/payment/';
  }

  findPaymentsByCard(card: Card): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.authService.getPhoneNumber() + ':' + this.authService.getPassword())});
    return this.http.post(this.clientPaymentUrl + '_findAll', card,{headers});
  }
}