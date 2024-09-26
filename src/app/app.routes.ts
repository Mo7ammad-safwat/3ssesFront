// src/app/app-routing.module.ts أو src/app/routes.ts (حسب هيكلة المشروع)

import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingcartComponent } from './user-page/shoppingcart/shoppingcart.component';
import { MyLearnComponent } from './user-page/my-learn/my-learn.component';
import { HomePadgeComponent } from '../app/user-page/home-padge/home-padge.component';
import { CoursesComponent } from './user-page/courses/courses.component';
import { CardDetailsComponent } from './user-page/courses/course-card/card-details/card-details.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { LogInComponent } from './security/log-in/log-in.component';
import { DetailsmyLearnComponent } from '../app/user-page/my-learn/detailsmy-learn/detailsmy-learn.component';
import { PaymentMethodComponent } from './user-page/shoppingcart/payment-method/payment-method.component';
import { GuestGuard } from './shared/Guards/guest.guard';
import { AuthGuard } from './shared/Guards/auth.guard';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { CourseAdminComponent } from './admin/course-admin/course-admin.component';
import { AddCourseComponent } from './admin/course-admin/add-course/add-course.component';

export const routes: Routes = [
  { path: 'login', component: LogInComponent, canActivate: [GuestGuard] }, // منع الوصول إذا كان مسجل الدخول
  { path: 'signup', component: SignUpComponent, canActivate: [GuestGuard] }, // منع الوصول إذا كان مسجل الدخول
  {
    path: 'PaymentMethods',
    component: PaymentMethodComponent,
    canActivate: [AuthGuard],
  }, // حماية باستخدام AuthGuard
  {
    path: 'home',
    component: UserPageComponent,
    canActivate: [AuthGuard], // حماية كل صفحات 'home' باستخدام AuthGuard
    children: [
      { path: '', component: HomePadgeComponent },
      { path: 'shopping', component: ShoppingcartComponent },
      { path: 'admin', component: MyLearnComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'my-learn', component: MyLearnComponent },
      { path: 'shoppingcart', component: ShoppingcartComponent },
      { path: 'detalis', component: CardDetailsComponent },
      { path: 'MyCourses', component: DetailsmyLearnComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoryAdminComponent },
      { path: 'course', component: CourseAdminComponent },
      { path: 'add-course', component: AddCourseComponent },
    ],
  }, // حماية صفحة الادمن
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // إعادة التوجيه إلى تسجيل الدخول بشكل افتراضي
  {
    path: '**',
    pathMatch: 'full',
    component: LogInComponent,
    canActivate: [GuestGuard],
  }, // إعادة التوجيه إلى تسجيل الدخول إذا كان مسجل الخروج
];
