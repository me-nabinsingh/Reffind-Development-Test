import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeSearchComponent } from './joke-search.component';

describe('JokeSearchComponent', () => {
  let component: JokeSearchComponent;
  let fixture: ComponentFixture<JokeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeSearchComponent ]
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
