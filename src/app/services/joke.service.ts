import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Joke } from '../models/joke';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokeUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param category 
   */
  getRandom (category: string = ''): Observable<Joke> {
    let params = new HttpParams();
    if(category) {
      this.jokeUrl = `${environment.apiUrl}random?category=${category}`;
    }
    return this.http.get<Joke>(this.jokeUrl);
  }


  /**
   * GET jokes that contains search term
   * @param term 
   */
  searchJoke(term: string): Observable<Joke> {
    if (!term.trim()) {
      return of();
    }
    return this.http.get<Joke>(`${environment.apiUrl}random?query=${term}`);
  }

}
