import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  cardMenu = [
    {
      image : '../../../assets/icons/burger.svg',
      title : 'Combo Meal',
      price : 3,
    },
    {
      image : '../../../assets/icons/burger.svg',
      title : 'Burgers & Sandwiches',
      price : 3,
    },
    {
      image : '../../../assets/icons/birthday-cake.svg',
      title : 'Happy Meal',
      price : 3,
    },
    {
      image : '../../../assets/icons/burger.svg',
      title : 'Beverages',
      price : 3,
    },
    {
      image : '../../../assets/icons/chicken-leg.svg',
      title : 'Chicken',
      price : 3,
    },
    {
      image : '../../../assets/icons/french-fries.svg',
      title : 'Snack & Sides',
      price : 3,
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
