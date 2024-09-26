// src/app/services/category.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // تأكد من المسار الصحيح

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = `${environment.baseURL}/categories`; // URL الأساسي للـ categories

  constructor(private http: HttpClient) {}

  // الحصول على جميع الفئات
  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // الحصول على فئة بناءً على المعرف
  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // الحصول على الفئات بناءً على معرف الدورة
  getCategoriesByCourseId(courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/course/${courseId}`);
  }

  // إنشاء فئة جديدة
  createCategory(categoryData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, categoryData);
  }

  // تحديث فئة موجودة
  updateCategory(id: number, categoryData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, categoryData);
  }

  // حذف فئة
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
