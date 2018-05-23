import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { JokesComponent } from './jokes.component';
import { JokeSearchComponent } from '../joke-search/joke-search.component';

import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { Joke } from '../models/joke';

@Component({selector: 'app-joke-search', template: ''})
class JokeSearchStubComponent { }

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;
  let expectedJoke: Joke;
  let activatedRoute:ActivatedRouteStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        JokesComponent,
        JokeSearchStubComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
