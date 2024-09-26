// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // التحقق مما إذا كان المستخدم مسجل الدخول
    if (this.authService.isLoggedIn()) {
      return true; // السماح بالوصول إلى المسار
    } else {
      // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن مسجل الدخول
      this.router.navigate(['/login']);
      return false;
    }
  }
}
