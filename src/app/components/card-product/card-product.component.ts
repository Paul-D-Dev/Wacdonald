import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  add: Food;
  products: Food[];
  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.filterProducts();
  }

  addProductToCart(product) {
    this.cartService.cart.push({...product});
  }
}
