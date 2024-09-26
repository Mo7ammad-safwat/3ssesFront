import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // تسجيل مستخدم جديد (Sign Up)
  signUp(userData: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/signup`, userData, {
      headers: this.headers,
    });
  }

  // تسجيل الدخول (Sign In)
  signIn(credentials: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/signin`, credentials, {
      headers: this.headers,
    });
  }

  // تخزين التوكن في Local Storage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // الحصول على التوكن من Local Storage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // التحقق من تسجيل الدخول
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // تسجيل الخروج
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
