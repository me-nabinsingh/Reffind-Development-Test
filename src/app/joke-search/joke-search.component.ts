import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Joke } from '../models/joke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke-search',
  templateUrl: './joke-search.component.html',
  styleUrls: ['./joke-search.component.scss']
})
export class JokeSearchComponent implements OnInit {

  joke$: Observable<Joke>;
  private searchTearms = new Subject<String>();

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.joke$ = this.searchTearms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(
        (term: string) => this.jokeService.searchJoke(term)
      )
    );
  }


  /**
   * 
   * @param term 
   */
  search(term: string): void {
    this.searchTearms.next(term);
  }

  
}
