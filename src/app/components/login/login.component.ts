import {Component} from "@angular/core";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    phoneNumber: '',
    password: ''
  }
  constructor(private authService: AuthService) {
  }

  login() {
    console.log(this.user.phoneNumber);
    console.log(this.user.password);

    this.authService.login(this.user);
  }
}
