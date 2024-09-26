import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Courses } from '../../shared/interface/course';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-my-learn',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './my-learn.component.html',
  styleUrl: './my-learn.component.scss',
})
export class MyLearnComponent {
  products: Courses[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   this.products = products;
    // });
  this.loadData();
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
  loadData() {
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  viewCard(course: any) {
    this.router.navigate([`home/MyCourses`]);
  }
}
