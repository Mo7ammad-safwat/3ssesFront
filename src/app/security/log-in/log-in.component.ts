import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signIn() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.signIn(credentials).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        console.log('Login successful:', response);
        this.router.navigate(['/home']); // إعادة التوجيه بعد تسجيل الدخول
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
