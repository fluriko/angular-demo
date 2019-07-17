import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_model/user-model';
import {UserSignup} from '../_model/user-signup-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findByEmail(email: string): Observable<User> {
    const param: HttpParams = new HttpParams().set('email', email);
    return this.http.get<User>('http://localhost:8080/api/user/by-email', {observe: 'body', params: param});
  }

  addUser(user: UserSignup): Observable<User> {
    return this.http.post<User>('http://localhost:8080/api/user', user, {observe: 'body'});
  }
}
