import { Category } from '../models/category';

/** return fresh array of test categories */
export function getTestCategories(): Category[] {
  return [
    {name: 'science'}, {name: 'dev'}
  ];
}