import { Injectable } from '@angular/core';
import { ExamModel } from '../models/exam.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamMutationService {
  private baseUrl = 'api/exams'; // replace with actual URL

  constructor(private http: HttpClient) { }

  addExam(exam: ExamModel): Observable<ExamModel> {
    return this.http.post<ExamModel>(this.baseUrl, exam);
  }
}
