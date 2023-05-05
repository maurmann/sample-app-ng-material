import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from './menu-item';
import { MenuCategory } from './menu-category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  sideBarOpened: boolean = true;


  mainMenu: MenuCategory[] = [];



  ngOnInit(): void {
    this.mainMenu.push({
      name: "Pedidos", icon: "shopping-cart", items: [{ name: "Novo Pedido", icon: "add-box", link: "#" }, { name: "Pedidos Pendentes", icon: "pending-actions", link: "#" }]
    });
  }




  toggleMenu(): void {
    this.sideBarOpened = !this.sideBarOpened;
  }
}
