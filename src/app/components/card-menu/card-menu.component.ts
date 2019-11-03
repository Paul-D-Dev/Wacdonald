import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  cardMenu = [
    {
      image : '',
      title : 'Combo Meal',
      price : 3,
    },
    {
      image : '',
      title : 'Burgers & Sandwiches',
      price : 3,
    },
    {
      image : '',
      title : 'Happy Meal',
      price : 3,
    },
    {
      image : '',
      title : 'Beverages',
      price : 3,
    },
    {
      image : '',
      title : 'Chicken',
      price : 3,
    },
    {
      image : '',
      title : 'Snack & Sides',
      price : 3,
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
