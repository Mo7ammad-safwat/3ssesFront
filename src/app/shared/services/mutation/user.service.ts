import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMutationService {
  private baseUrl = 'api/users'; // replace with actual URL

  constructor(private http: HttpClient) { }

  addUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl, user);
  }
}
