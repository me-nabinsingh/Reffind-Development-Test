import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Category } from '../models/category';

import { asyncData, asyncError } from '../../testing/async-observable-helpers';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let categoryService: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CategoryService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    categoryService = new CategoryService(<any> httpClientSpy);
  });


  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));


  it('should return categories', () => {
    const categories:Category[] = [{name: 'science'}, {name: 'dev'}]
   
    httpClientSpy.get.and.returnValue(asyncData(categories));
   
    categoryService.all().subscribe(
      cats => expect(cats).toEqual(categories),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });


  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404, statusText: 'Not Found'
    });
   
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
   
    categoryService.all().subscribe(
      heroes => fail('expected an error, not categories'),
      error  => expect(error.error).toContain('404 error')
    );
  });


});
