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
import { DetailsmyLearn2Component } from './user-page/my-learn/detailsmy-learn2/detailsmy-learn2.component';
import { DetailsmyLearn3Component } from './user-page/my-learn/detailsmy-learn3/detailsmy-learn3.component';
import { DetailsmyLearn4Component } from './user-page/my-learn/detailsmy-learn4/detailsmy-learn4.component';
import { PaymentMethodComponent } from './user-page/shoppingcart/payment-method/payment-method.component';
import { Exam1Component } from './user-page/Exams/exam1/exam1.component';
import { Exam2Component } from './user-page/Exams/exam2/exam2.component';
import { Exam3Component } from './user-page/Exams/exam3/exam3.component';
import { Exam4Component } from './user-page/Exams/exam4/exam4.component';

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
      { path: 'MyCourses/c1', component: DetailsmyLearnComponent },
      { path: 'MyCourses/c2', component: DetailsmyLearn2Component},
      { path: 'MyCourses/c3', component: DetailsmyLearn3Component },
      { path: 'MyCourses/c4', component: DetailsmyLearn4Component },
      { path: 'MyCourses/c1/exam', component: Exam1Component },
      { path: 'MyCourses/c2/exam', component: Exam2Component },
      { path: 'MyCourses/c3/exam', component: Exam3Component },
      { path: 'MyCourses/c4/exam', component: Exam4Component },
    ],
  },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Set login as the default route
  { path: '**', pathMatch: 'full', component: LogInComponent },
];
