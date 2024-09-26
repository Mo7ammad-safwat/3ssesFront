import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterModule ,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signUp() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.authService.signUp(userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/signin']); // إعادة التوجيه بعد التسجيل
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
  }
}
