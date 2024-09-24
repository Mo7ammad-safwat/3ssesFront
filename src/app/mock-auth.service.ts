import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  private users = [
    { email: 'trial@gmail.com', password: '12345' },
    { email: 'Andrew@gmail.com', password: '12345' },
    { email: 'Aser@gmail.com', password: '12345' },
    { email: 'Mohamed@gmail.com', password: '12345' },

  ];

  login(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }
}
