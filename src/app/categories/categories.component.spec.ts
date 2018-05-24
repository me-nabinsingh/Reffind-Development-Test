import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { asyncData } from '../../testing/async-observable-helpers';
import { CategoryService } from '../services/category.service';

import { Router } from '@angular/router';
import { getTestCategories } from './test-categories';

@Component({selector: 'app-joke-search', template: ''})
class JokeSearchStubComponent { }

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    const categoryServiceSpy = jasmine.createSpyObj('CategoryService', ['all']);

    TestBed.configureTestingModule({
      declarations: [ 
        CategoriesComponent,
        JokeSearchStubComponent,
        RouterLinkDirectiveStub 
      ],
      providers: [
        { provide: CategoryService, useValue: categoryServiceSpy },
      ],
      schemas:  [NO_ERRORS_SCHEMA]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CategoriesComponent);
      component = fixture.componentInstance;

      categoryServiceSpy.all.and.returnValue(asyncData(getTestCategories()));
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have categories', () => {
    expect(component.categories.length).toBe(2);
  });

});
