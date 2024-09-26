import { Injectable } from '@angular/core';
import { ExamLoaderService } from '../loaders/exam-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  constructor(private examLoader: ExamLoaderService) { }

  getCourse(parentId: string) {
    return this.examLoader.loadCourse(parentId);
  }

  getCreatedBy(parentId: string) {
    return this.examLoader.loadCreatedBy(parentId);
  }
}
