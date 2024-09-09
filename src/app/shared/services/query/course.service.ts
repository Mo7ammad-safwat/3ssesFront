import { Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { CourseLoaderService } from '../loaders/course-loader.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseQueryService {
  private baseUrl = 'api/courses'; // replace with actual URL

  constructor(private http: HttpClient, private courseLoader: CourseLoaderService) { }

  getCourse(id: string): Observable<CourseModel> {
    return this.courseLoader.load(id);
  }

  getCourses(page = 1, limit = 10): Observable<{ courses: CourseModel[], totalPages: number, currentPage: number }> {
    const skip = (page - 1) * limit;
    return this.http.get<{ courses: CourseModel[], totalPages: number, currentPage: number }>(`${this.baseUrl}?skip=${skip}&limit=${limit}`);
  }
}
