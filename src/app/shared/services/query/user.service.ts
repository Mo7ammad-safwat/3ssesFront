import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserLoaderService } from '../loaders/user-loader.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserQueryService {
  private baseUrl = 'api/users'; // replace with actual URL

  constructor(private http: HttpClient, private userLoader: UserLoaderService) { }

  getUser(id: string): Observable<UserModel> {
    return this.userLoader.load(id);
  }

  getUsers(page = 1, limit = 10): Observable<{ users: UserModel[], totalPages: number, currentPage: number }> {
    const skip = (page - 1) * limit;
    return this.http.get<{ users: UserModel[], totalPages: number, currentPage: number }>(`${this.baseUrl}?skip=${skip}&limit=${limit}`);
  }
}
