import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Joke } from '../models/joke';


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokeUrl = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) { }

  /**
   * Get random joke
   */
  getRandom (category: string = ''): Observable<Joke> {
    let params = new HttpParams();
    if(category) {
      this.jokeUrl = "https://api.chucknorris.io/jokes/random?category=" +  category;
    }
    return this.http.get<Joke>(this.jokeUrl);
  }
}
