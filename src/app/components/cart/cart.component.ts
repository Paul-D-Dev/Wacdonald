import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Food[] = [
    {
      id: 10,
      name: 'Crispy Chicken',
      promo: null,
      price: 2,
      icon: 'chicken-leg.svg',
      cat: 'menu',
      number: 0,
  },
  {
      id: 11,
      name: 'Sausage sausage',
      promo: null,
      price: 4,
      icon: 'birthday-cake.svg',
      cat: 'product',
      number: 0,
  },
  {
      id: 12,
      name: 'Filet-o-Fish',
      promo: null,
      price: 4,
      icon: 'roast-chicken.svg',
      cat: 'product',
      number: 0,
  }
  ];

  count = 0;
  constructor() { }

  ngOnInit() {
  }

  sousProduct() {
    if (this.count > 0) {
      return this.count--;
    } else {
      return;
    }
  }
  addProduct() {
    return this.count++;
  }
}
