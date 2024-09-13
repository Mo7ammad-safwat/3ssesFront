import { User } from './../../../shared/interface/user';
import { Course } from './../../../shared/interface/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  Course:any = [
    {
      id: '1',
      title: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
    Userid: 1,
    }
  ];

}
