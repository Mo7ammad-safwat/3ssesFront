import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // الحصول على جميع الدورات
  getAllCourses(): Observable<any> {
    return this.http.get(`${environment.baseURL}/courses`, {
      headers: this.headers,
    });
  }

  // الحصول على دورة بناءً على ID
  getCourseById(id: number): Observable<any> {
    return this.http.get(`${environment.baseURL}/course/${id}`, {
      headers: this.headers,
    });
  }

  // الحصول على الدورات بناءً على CategoryId
  getCoursesByCategoryId(categoryId: number): Observable<any> {
    return this.http.get(
      `${environment.baseURL}/courses/category/${categoryId}`,
      {
        headers: this.headers,
      }
    );
  }

  // إضافة دورة جديدة
  addCourse(courseData: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/course`, courseData, {
      headers: this.headers,
    });
  }

  // تحديث دورة (إن وجدت)
  updateCourse(id: number, courseData: any): Observable<any> {
    return this.http.put(`${environment.baseURL}/course/${id}`, courseData, {
      headers: this.headers,
    });
  }

  // حذف دورة (إن وجدت)
  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${environment.baseURL}/course/${id}`, {
      headers: this.headers,
    });
  }
}
