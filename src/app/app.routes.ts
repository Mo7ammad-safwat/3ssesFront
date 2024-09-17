import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingcartComponent } from './user-page/shoppingcart/shoppingcart.component';
import { MyLearnComponent } from './user-page/my-learn/my-learn.component';
import { HomePadgeComponent } from '../app/user-page/home-padge/home-padge.component';
import { CoursesComponent } from './user-page/courses/courses.component';
<<<<<<< HEAD
import { PurchasedCoursesComponent } from './user-page/home-padge/purchased-courses/purchased-courses.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { LogInComponent } from './security/log-in/log-in.component';
=======
import { CardDetailsComponent } from './user-page/courses/course-card/card-details/card-details.component';
>>>>>>> origin/v1.0-mohammad

export const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'home',
    component: UserPageComponent,
    children: [
      { path: '', component: HomePadgeComponent },
      { path: 'shopping', component: ShoppingcartComponent },
      { path: 'admin', component: MyLearnComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'my-learn', component: MyLearnComponent },
      { path: 'shoppingcart', component: ShoppingcartComponent },
      { path: 'detalis', component: CardDetailsComponent },
    ],
  },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Set login as the default route
  { path: '**', pathMatch: 'full', component: LogInComponent },
];
