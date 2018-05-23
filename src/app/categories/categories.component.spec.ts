import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { CategoryService } from '../services/category.service';

@Component({selector: 'app-joke-search', template: ''})
class JokeSearchStubComponent { }

class MockCategoryService {
  all = [
    "explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion"
  ];
};

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CategoriesComponent,
        JokeSearchStubComponent,
        RouterLinkDirectiveStub 
      ],
      providers: [
        { provide: CategoryService, useClass: MockCategoryService },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
