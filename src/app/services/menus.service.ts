import { foods } from './../../mock-menu';
import { Injectable } from '@angular/core';
import { Food } from '../models/food';


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  // Filter foodsList by Menu
  filterMenus(): Food[] {
    return foods.filter(menu => {
      return menu.cat === 'menu';
    });
  }


}

