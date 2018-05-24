import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { JokeSearchComponent } from './joke-search.component';
import { JokeService } from '../services/joke.service';
import { asyncData } from '../../testing/async-observable-helpers';
import { getTestJoke } from '../jokes/test-joke';

describe('JokeSearchComponent', () => {
  let component: JokeSearchComponent;
  let fixture: ComponentFixture<JokeSearchComponent>;
  const jokeServiceSpy = jasmine.createSpyObj('JokeService', ['searchJoke']);

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ JokeSearchComponent ],
      providers: [ { provide: JokeService, useValue: jokeServiceSpy },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeSearchComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
