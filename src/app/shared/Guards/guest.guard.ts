// src/app/guards/guest.guard.ts

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
export class GuestGuard implements CanActivate {
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
      // إعادة التوجيه إلى الصفحة الرئيسية أو لوحة التحكم إذا كان مسجل الدخول
      this.router.navigate(['/home']);
      return false;
    } else {
      return true; // السماح بالوصول إلى صفحات تسجيل الدخول والتسجيل
    }
  }
}
