import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Food[] = this.cartService.cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  minusProduct(product, i) {
    if (this.cart[i].number > 1) {
      this.totalOrder();
      return this.cart[i].number--;
    } else if (this.cart[i].number === 1) {
      return this.cart.splice(i, 1);
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
