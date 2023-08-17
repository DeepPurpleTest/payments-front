import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Card} from "../models/card";

@Injectable()
export class CardService {
  clientCardUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.clientCardUrl = 'http://localhost:8080/client/card';
  }

  findCardsByCurrentUser(): Observable<Card[]> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.authService.getPhoneNumber() + ':' + this.authService.getPassword())});
    return this.http.get<Card[]>(this.clientCardUrl, {headers});
  }
}
