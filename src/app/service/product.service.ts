import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../_model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/' + id,
      {observe: 'body'});
  }
}
