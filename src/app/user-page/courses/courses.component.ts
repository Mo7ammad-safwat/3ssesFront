import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: any[] = [
    {
      id: 'c1',
      title: 'Introduction to Mechanical Engineering',
      description:
        'A comprehensive overview of mechanical engineering principles.',
      Categoryid: 1,
      Userid: 101,
      sections: [
        { id: 's1', title: 'Basics', pozshin: 1, Courseid: 1, lessons: [] },
        {
          id: 's2',
          title: 'Advanced Topics',
          pozshin: 2,
          Courseid: 1,
          lessons: [],
        },
      ],
      aboutMe: [],
    },
    {
      id: 'c2',
      title: 'Feed Mill Technology',
      description:
        'Understanding the core components and processes in feed mill production.',
      Categoryid: 2,
      Userid: 102,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Thermodynamics',
      description: 'Study of energy, heat, and their transformations.',
      Categoryid: 3,
      Userid: 103,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Thermodynamics',
      description: 'Study of energy, heat, and their transformations.',
      Categoryid: 3,
      Userid: 103,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Thermodynamics',
      description: 'Study of energy, heat, and their transformations.',
      Categoryid: 3,
      Userid: 103,
      sections: [],
      aboutMe: [],
    },
  ];
  language: string = 'en';
  constructor(private router: Router) {}
  viewCard(course: any) {
this.router.navigate(['detalis']); }
  enroll(course: any) {
    console.log(course);
  }
}
