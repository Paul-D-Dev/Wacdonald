import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { foods } from 'src/mock-menu';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

    // Filter foodsList by product
    filterProducts(): Food[] {
      return foods.filter(product => {
        return product.cat === 'product';
      });
    }
}
