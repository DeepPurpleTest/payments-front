import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  authUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.authUrl = 'http://localhost:8080/auth/';
  }

  login(user: User) {
    console.log('Before post');
    return this.http.post(this.authUrl + '_login', user).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        this.router.navigate(['/home']).then(() =>
          console.log('Navigation to /home completed')
        )
      }
    });
  }
}
