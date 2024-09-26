import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../../shared/services/course.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';

@Component({
  selector: 'app-course-admin',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './course-admin.component.html',
  styleUrl: './course-admin.component.scss',
})
export class CourseAdminComponent implements OnInit, OnDestroy {
  Courses: any[] = [];
  totalCourses = 0;
  pageSize = 10; // Set default page size
  currentPage = 0;

  coursesLoaded: boolean = false;
  coursesError: boolean = false;

  constructor(
    private activpop: NgbModal,
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  addCourse() {
    this.router.navigate(['admin/add-course'], {
      relativeTo: this.activatedRoute,
    });
  }
  openAddCourseModal() {
    this.activpop.open(AddCourseComponent);
  }

  loadData() {
    this.coursesLoaded = false;
    this.coursesError = false;
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        this.coursesLoaded = true;
        this.Courses = data;
      },
      error: (error) => {
        this.coursesError = true;
        console.error('Error fetching data:', error);
      },
    });
  }

  ngOnDestroy(): void {
    // this.coursesSubscription?.unsubscribe();
  }
}
