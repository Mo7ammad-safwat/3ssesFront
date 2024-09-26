import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  // constructor(private authService: MockAuthService, private router: Router) {} // Inject MockAuthService and Router

  onLogin() {
  //   if (this.authService.login(this.email, this.password)) {
  //     this.router.navigate(['/home']); // Navigate to home on successful login
  //   } else {
  //     alert('Invalid credentials'); // Show an alert on failed login
  //   }
  }
}
