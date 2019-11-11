import { MenusService } from './../../services/menus.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';


@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  menus: Food[] ;
  constructor(private menusService: MenusService) { }

  ngOnInit() {
    this.menus = this.menusService.filterMenus();
  }



}
