import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelModule } from 'primeng/panel';
import { CoursesComponent } from '../../courses.component';


@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    CommonModule,
    RouterModule,



    FontAwesomeModule,

    CoursesComponent,
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent {
  course?: any = {
    id: 'c1',
    title: 'Evolutionary Biology',
    description:
      'Examination of the processes that drive the diversity and adaptation of organisms over time.',
    Categoryid: 1,
    Userid: 101,
    sections: [
      { id: 's1', title: 'Basics', pozshin: 1, Courseid: 1, lessons: [] },
      {
        id: 's2',
        title: 'Advanced Topics',
        pozshin: 2,
        Courseid: 1,
        lessons: [
          {
            id: 'l1',
            title: 'Lesson 1',
            pozshin: 1,
            Sectionid: 1,
            content: 'This is the first lesson.',
          },
          {
            id: 'l2',
            title: 'Lesson 2',
            pozshin: 2,
            Sectionid: 1,
            content: 'This is the second lesson.',
          },
        ],
      },
    ],
    aboutMe: [
      {
        id: 'a1',
        title: 'About Me',
        content: 'This is the about me section.',
      },
    ],
  };
  reviewData: any[] = [];
  panelOpenState = false;
  courseId?: any;
  // courses: Course[] = [];
  totalRatings: number = 0;
  responsiveOptions: any;
  instrautorName: string = '';
  sectionCount: number = 0;
  lessonCount: number = 0;
  descriptionMasterList: any[] = [];
  // path = Constants.COURSE_DOWNLOAD_IMAGE_API;
  // imageUrl: SafeUrl | undefined;
  // private subscription?: Subscription;
  language: string = 'en';
  totalQuestions = 0;
  pageSize = 10; // Set default page size
  currentPage = 0;
  loaddata = false;
  loadError = false;
  loaddatadescription = false;
  loadErrordescription = false;
  loaddatareview = false;
  loadErrorreview = false;

  // private languageSubscription: Subscription | undefined;
  // @ViewChild('relatedCourses') relatedCourses!: ElementRef;
  // @ViewChild('card') card!: ElementRef;
  category: any;
  cardFixed: boolean = false;
  stopScroll: boolean = false;
  activeIndex: number | null = null;

  toggleDropdown(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  getSecondHalf(details: any[]): any[] {
    const half = Math.ceil(details.length / 2);
    return details.slice(half);
  }
  getFirstHalf(details: any[]): any[] {
    const half = Math.ceil(details.length / 2);
    return details.slice(0, half);
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  addProductToCart() {
    console.log('course added to cart');
  }
}
