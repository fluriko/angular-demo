import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../_model/category-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>('http://localhost:8080/api/category',
      {observe: 'body'});
  }

  public getById(id: string): Observable<Category> {
    return this.http.get<Category>('http://localhost:8080/api/category/' + id,
      {observe: 'body'});
  }
}
