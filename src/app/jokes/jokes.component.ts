import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { ActivatedRoute } from '@angular/router';

import { Joke } from '../models/joke';


@Component({
  selector: 'app-joke',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  joke: Joke;
  category: string = this.route.snapshot.paramMap.get('slug');

  constructor(private jokeService: JokeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRandomJoke();
  }

  getRandomJoke(): void {
    this.jokeService.getRandom(this.category)
    .subscribe(joke => this.joke = joke);
  }


}
