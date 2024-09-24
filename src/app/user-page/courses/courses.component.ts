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
      title: 'Cell Biology',
      description:
        'Study of the structure and function of cells, including cell organelles and cellular processes.',
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
      title: 'Genetics',
      description:
        'Exploration of heredity, gene function, and genetic variation in living organisms.',
      Categoryid: 2,
      Userid: 102,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Evolutionary Biology',
      description: 'Examination of the processes that drive the diversity and adaptation of organisms over time.',
      Categoryid: 3,
      Userid: 103,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Ecology',
      description: 'Study of interactions between organisms and their environment, including ecosystems and biodiversity.',
      Categoryid: 3,
      Userid: 103,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Human Anatomy',
      description: "Detailed study of the human body's structure, including organs, tissues, and systems.",
      Categoryid: 3,
      Userid: 103,
      sections: [],
      aboutMe: [],
    },
  ];
  language: string = 'en';
item: any;
  constructor(private router: Router) {}
  viewCard(course: any) {
    this.router.navigate(['home/detalis']);
  }
  enroll(course: any) {
    console.log(course);
  }
}
