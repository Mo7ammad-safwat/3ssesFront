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
    titleEn: 'Introduction to Data Science',
    titleAr: 'مقدمة في علم البيانات',
    instructorNameEn: 'John Doe',
    category: {
      name: 'Data Science',
      nameAr: 'علم البيانات',
    },
    updatedDate: new Date(2023, 8, 1), // September 1, 2023
    totalHours: 40,
    formattedAmountEn: '$199.99',
    formattedAmountEnBeforeDiscount: '$299.99',
    descriptionEn:
      "This course provides a comprehensive introduction to the field of data science. You'll learn key concepts and tools, including Python, statistics, and machine learning.",
    descriptionAr:
      'تقدم هذه الدورة مقدمة شاملة في مجال علم البيانات. ستتعلم المفاهيم والأدوات الرئيسية بما في ذلك بايثون والإحصاء وتعلم الآلة.',
    sections: [
      {
        titleEn: 'Introduction and Setup',
        titleAr: 'مقدمة وإعداد',
        lessons: [
          {
            titleEn: 'Course Overview',
            titleAr: 'نظرة عامة على الدورة',
            contentType: 'video',
            duration: '10:30',
          },
          {
            titleEn: 'Setting Up Your Environment',
            titleAr: 'إعداد بيئة العمل',
            contentType: 'video',
            duration: '15:45',
          },
        ],
      },
      {
        titleEn: 'Python Basics',
        titleAr: 'أساسيات بايثون',
        lessons: [
          {
            titleEn: 'Introduction to Python',
            titleAr: 'مقدمة في بايثون',
            contentType: 'video',
            duration: '12:00',
          },
          {
            titleEn: 'Data Types and Variables',
            titleAr: 'أنواع البيانات والمتغيرات',
            contentType: 'video',
            duration: '18:20',
          },
        ],
      },
    ],
    relatedCourses: [
      {
        titleEn: 'Advanced Data Science Techniques',
        titleAr: 'تقنيات علم البيانات المتقدمة',
        instructorNameEn: 'Jane Smith',
        category: {
          name: 'Data Science',
          nameAr: 'علم البيانات',
        },
        updatedDate: new Date(2023, 6, 15), // July 15, 2023
        totalHours: 50,
        formattedAmountEn: '$249.99',
        formattedAmountEnBeforeDiscount: '$349.99',
        descriptionEn:
          'Dive deeper into data science with advanced techniques such as deep learning and natural language processing.',
        descriptionAr:
          'تعرف على تقنيات علم البيانات المتقدمة مثل التعلم العميق ومعالجة اللغات الطبيعية.',
        sections: [
          {
            titleEn: 'Deep Learning Basics',
            titleAr: 'أساسيات التعلم العميق',
            lessons: [
              {
                titleEn: 'Introduction to Neural Networks',
                titleAr: 'مقدمة في الشبكات العصبية',
                contentType: 'video',
                duration: '20:00',
              },
              {
                titleEn: 'Building Your First Model',
                titleAr: 'بناء نموذجك الأول',
                contentType: 'video',
                duration: '25:30',
              },
            ],
          },
        ],
        relatedCourses: [], // Nested related courses can be added here as needed.
      },
    ],
  };
  reviewData: any[] = [
    {
      userName: 'Alice Johnson',
      comment:
        'This course was very informative and the instructor explained the concepts clearly. Highly recommend for beginners!',
      rating: 5,
      reviewDate: new Date(2023, 8, 15), // September 15, 2023
    },
    {
      userName: 'Mohamed Ali',
      comment:
        'The course covers a lot of material but could use more practical examples. Overall, a good introduction to data science.',
      rating: 4,
      reviewDate: new Date(2023, 8, 20), // September 20, 2023
    },
    {
      userName: 'Sara Lee',
      comment:
        'Great course! The instructor made complex topics easy to understand.',
      rating: 5,
      reviewDate: new Date(2023, 9, 1), // October 1, 2023
    },
    {
      userName: 'Youssef Mansour',
      comment:
        'The course is well-structured but some sections could use more depth. The quizzes were helpful.',
      rating: 4,
      reviewDate: new Date(2023, 7, 25), // August 25, 2023
    },
  ];
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
