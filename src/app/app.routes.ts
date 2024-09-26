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

export const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'PaymentMethods', component: PaymentMethodComponent },
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
      { path: 'MyCourses', component: DetailsmyLearnComponent },

    ],
  },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Set login as the default route
  { path: '**', pathMatch: 'full', component: LogInComponent },
];
