import { Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseMutationService {
  private baseUrl = 'api/courses'; // replace with actual URL

  constructor(private http: HttpClient) { }

  addCourse(course: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(this.baseUrl, course);
  }
}
