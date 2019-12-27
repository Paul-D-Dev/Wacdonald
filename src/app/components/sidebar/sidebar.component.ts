import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  cart: Food[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart;
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
