import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { JokeService } from './joke.service';
import { Joke } from '../models/joke';

import { asyncData, asyncError } from '../../testing/async-observable-helpers';

describe('JokeService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let jokeService: JokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JokeService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    jokeService = new JokeService(<any> httpClientSpy);
  });

  it('should be created', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));


  it('should return random joke', () => {
    const randomJoke:Joke = {
      category: null, 
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "RlrANagQSCG1oWxp8Fsj6w",
      url: "https://api.chucknorris.io/jokes/RlrANagQSCG1oWxp8Fsj6w",
      value: "Chuck Norris knows Chivalry is dead. He was the one who killed it."
    };
   
    httpClientSpy.get.and.returnValue(asyncData(randomJoke));
   
    jokeService.getRandom().subscribe(
      joke => expect(joke).toEqual(randomJoke),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should return random joke with category', () => {
    const randomJoke:Joke = {
      category: 'science', 
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "RlrANagQSCG1oWxp8Fsj6w",
      url: "https://api.chucknorris.io/jokes/RlrANagQSCG1oWxp8Fsj6w",
      value: "Chuck Norris knows Chivalry is dead. He was the one who killed it."
    };
   
    httpClientSpy.get.and.returnValue(asyncData(randomJoke));
   
    jokeService.getRandom('science').subscribe(
      joke => expect(joke).toEqual(randomJoke),
      fail
    );
  });


  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404, statusText: 'Not Found'
    });
   
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
   
    jokeService.getRandom().subscribe(
      heroes => fail('expected an error, not joke'),
      error  => expect(error.error).toContain('404 error')
    );
  });


  it('should return joke based on search term', () => {
    const randomJoke:Joke = {
      category: 'science', 
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "RlrANagQSCG1oWxp8Fsj6w",
      url: "https://api.chucknorris.io/jokes/RlrANagQSCG1oWxp8Fsj6w",
      value: "Chuck Norris knows Chivalry is dead. He was the one who killed it."
    };
   
    httpClientSpy.get.and.returnValue(asyncData(randomJoke));
   
    jokeService.searchJoke('chuck').subscribe(
      joke => expect(joke).toEqual(randomJoke),
      fail
    );
  });

});
