import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  products: Food[];
  cartServ = this.cartService.cart;
  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.filterProducts();
  }

  addProductToCart(product: Food) {
    // Définir une constante qui va vérifier si le produit qu'on ajoute se trouve dans le panier.
    const productCart = this.cartServ.find((item) => item.id === product.id);
    // Si le produit se trouve déjà dans le panier, on l'incrémente, sinon on l'ajoute.
    if (productCart) {
      productCart.number ++;
    } else {
      this.cartServ.push(product);

    }
  }
}
