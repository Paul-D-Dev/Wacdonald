import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  products: Food[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.filterProducts();
  }

}
