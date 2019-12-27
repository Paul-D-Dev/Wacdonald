import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Food[] = [];
  constructor() { }
}
