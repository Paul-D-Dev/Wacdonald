import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {

  }

  minusProduct(product, i) {
    if (this.cart[i].number > 0) {
      this.totalOrder();
      return this.cart[i].number--;
    } else if (this.cart[i].number === 0) {
      return this.cart.splice(this.cart.findIndex(() => product.id === this.cart[i].id ), 1);
    }

  }
  addProduct(product, i) {
    this.totalOrder();
    return this.cart[i].number++;
  }

  totalOrder() {
    let sum = 0;
    for (const product of this.cart) {
        sum +=  product.price * product.number;
      }
    return `$ ${sum}`;
    }
  }
