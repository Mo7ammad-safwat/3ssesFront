import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  language: string = 'en';
  item: any;
  constructor(private router: Router, private courseService: CourseService) {}
  ngOnInit(): void {
this.loadData()  }
  loadData() {
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  viewCard(course: any) {
    this.router.navigate(['home/detalis']);
  }
  enroll(course: any) {
    console.log(course);
  }
}
