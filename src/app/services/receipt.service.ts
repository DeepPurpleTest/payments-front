import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class ReceiptService {
  clientReceiptUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.clientReceiptUrl = 'http://localhost:8080/client/receipt/';
  }

  getReceipt(id: any): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.authService.getPhoneNumber() + ':' + this.authService.getPassword())});
    return this.http.get(this.clientReceiptUrl + 'get/' + id,{headers, observe:'response', responseType:'blob'}); // binary data responseType:'blob'
  }
}
