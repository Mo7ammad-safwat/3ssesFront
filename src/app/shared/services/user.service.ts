import { Injectable } from '@angular/core';
import { UserLoaderService } from '../loaders/user-loader.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userLoader: UserLoaderService) { }

  getEnrolledCourses(parentId: string) {
    return this.userLoader.loadEnrolledCourses(parentId);
  }

  getCreatedExams(parentId: string) {
    return this.userLoader.loadCreatedExams(parentId);
  }
}
