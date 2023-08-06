import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;
  constructor(private router: Router, private authService: AuthService) {
    this.user = this.authService.getCurrentUser();
  }
  ngOnInit(): void {
    console.log(this.authService.getPhoneNumber());
    console.log(this.authService.getRole());
  }

  logout() {
    this.authService.logout().subscribe({
      error: (error) => {
        console.error('Error:', error.body);
      },
      complete: () => {
        sessionStorage.clear();
        this.router.navigate(['/login']).then(() =>
          console.log('Navigation to /home completed')
        )
      }
    });
  }

}
