import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Courses } from '../../shared/interface/course';

@Component({
  selector: 'app-my-learn',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './my-learn.component.html',
  styleUrl: './my-learn.component.scss',
})
export class MyLearnComponent {
  products: Courses[] = [
    {
      id: 'c1',
      title: 'Physics',
      description:
        'A comprehensive overview of mechanical engineering principles.',
      Categoryid: 1,
      instractorNaem: 'Gostaf Adel',
      images: './../../../assets/img/download.png',

      Userid: 101,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c2',
      title: 'Chemistry',
      description:
        'Understanding the core components and processes in feed mill production.',
      Categoryid: 2,
      instractorNaem: 'Ashraf Kamel',
      images:
        './../../../assets/img/WhatsApp Image 2024-09-16 at 11.19.12_889f6bc7.jpg',

      Userid: 102,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c3',
      title: 'Arabic',
      description: 'Study of energy, heat, and their transformations.',
      Categoryid: 3,
      instractorNaem: 'Ahmed mohamed',
      images: './../../../assets/img/download.png',

      Userid: 103,
      sections: [],
      aboutMe: [],
    },
    {
      id: 'c4',
      title: 'English',
      description: 'Study of energy, heat, and their transformations.',
      Categoryid: 3,
      instractorNaem: 'John Doe',
      images:
        './../../../assets/img/WhatsApp Image 2024-09-16 at 11.19.12_889f6bc7.jpg',

      Userid: 103,
      sections: [],
      aboutMe: [],
    },
  ];

  responsiveOptions: any[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  viewCard(course: any) {
    this.router.navigate([`home/MyCourses/${course.id}`]);
  }
}
