import { Injectable } from '@angular/core';
import { CourseLoaderService } from '../loaders/course-loader.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private courseLoader: CourseLoaderService) { }

  getInstructor(parentId: string) {
    return this.courseLoader.loadInstructor(parentId);
  }

  getEnrolledStudents(parentId: string) {
    return this.courseLoader.loadEnrolledStudents(parentId);
  }

  getExams(parentId: string) {
    return this.courseLoader.loadExams(parentId);
  }
}
