import {Component} from "@angular/core";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {} as User;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    console.log(this.user.phoneNumber);
    console.log(this.user.password);

    this.authService.login(this.user).subscribe({
      next: (data) => {
        this.user.role = data.role;
        console.log(data);
        console.log(this.user);
      },
      error: (error) => {
        console.error('Error:', error.body);
      },
      complete: () => {
        this.authService.saveUserInStorage(this.user);
        this.router.navigate(['/home']).then(() =>
          console.log('Navigation to /home completed')
        )
      }
    });
  }
}
