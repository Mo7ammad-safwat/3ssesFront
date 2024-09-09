import { Injectable } from '@angular/core';
import { ExamModel } from '../models/exam.model';
import { ExamLoaderService } from '../loaders/exam-loader.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamQueryService {
  private baseUrl = 'api/exams'; // replace with actual URL

  constructor(private http: HttpClient, private examLoader: ExamLoaderService) { }

  getExam(id: string): Observable<ExamModel> {
    return this.examLoader.load(id);
  }

  getExams(page = 1, limit = 10): Observable<{ exams: ExamModel[], totalPages: number, currentPage: number }> {
    const skip = (page - 1) * limit;
    return this.http.get<{ exams: ExamModel[], totalPages: number, currentPage: number }>(`${this.baseUrl}?skip=${skip}&limit=${limit}`);
  }
}
