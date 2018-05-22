import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'https://api.chucknorris.io/jokes/categories';  // URL to joke categories
  constructor(private http: HttpClient) { }

  /**
   * Get all categories
   */
  all (): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

}
