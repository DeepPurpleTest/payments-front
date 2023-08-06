import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  authUrl: string;

  constructor(private http: HttpClient) {
    this.authUrl = 'http://localhost:8080/auth/';
  }

  login(user: User): Observable<any> {
    return this.http.post(this.authUrl + '_login', user);
  }

  getCurrentUser(): Observable<any> {
    const headers = new HttpHeaders({Authorization : 'Basic ' + btoa(this.getPhoneNumber() + ':' + this.getPassword())});
    return this.http.get(this.authUrl + 'account', {headers});
  }

  logout() {
    const headers = new HttpHeaders({Authorization : 'Basic ' + btoa(this.getPhoneNumber() + ':' + this.getPassword())});
    return this.http.post(this.authUrl + 'logout', {headers});
  }

  saveUserInStorage(user: User) {
    sessionStorage.setItem('phoneNumber', user.phoneNumber);
    sessionStorage.setItem('password', user.password);
    sessionStorage.setItem('role', user.role);
  }
  getPhoneNumber() {
    return sessionStorage.getItem('phoneNumber');
  }

  getPassword() {
    return sessionStorage.getItem('password');
  }

  getRole() {
    return sessionStorage.getItem('role');
  }
}
