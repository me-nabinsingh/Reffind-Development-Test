import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { JokesComponent } from './jokes.component';
import { JokeSearchComponent } from '../joke-search/joke-search.component';

import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';

import { asyncData } from '../../testing/async-observable-helpers';

import { Joke } from '../models/joke';
import { JokeService } from '../services/joke.service';

import { getTestJoke } from './test-joke';



@Component({selector: 'app-joke-search', template: ''})
class JokeSearchStubComponent { }

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;
  let activatedRoute: ActivatedRouteStub;
  const jokeServiceSpy = jasmine.createSpyObj('JokeService', ['getRandom']);

  beforeEach(async(() => {
    
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    TestBed.configureTestingModule({
      declarations: [ 
        JokesComponent,
        JokeSearchStubComponent,
      ],
       providers: [
        { provide: Router,         useValue: routerSpy},
        { provide: JokeService, useValue: jokeServiceSpy },
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    jokeServiceSpy.getRandom.and.returnValue(asyncData(getTestJoke()));
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
