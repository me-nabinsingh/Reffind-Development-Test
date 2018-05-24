import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JokeService } from '../services/joke.service';

import { Joke } from '../models/joke';


@Component({
  selector: 'app-joke',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  joke: Joke;
  category: string;

  constructor(private jokeService: JokeService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe(pmap => this.getRandomJoke(pmap.get('slug')));
  }

  /**
   * Load random joke
   */
  getRandomJoke(category: string): void {
    this.jokeService.getRandom(category)
    .subscribe(joke => this.joke = joke);
  }


}
