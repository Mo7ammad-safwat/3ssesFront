import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  private hideSidebarRoutes = ['/login', '/signup'];

  constructor(private router: Router) {}

  shouldShowSidebar(): boolean {
    return !this.hideSidebarRoutes.includes(this.router.url);
  }
}
