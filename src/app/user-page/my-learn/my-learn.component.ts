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
  ];

  responsiveOptions: any[] | undefined;

  // constructor(private productService: ProductService) {}

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
}
