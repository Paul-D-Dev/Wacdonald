import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ContainerComponent } from './pages/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardMenuComponent,
    CardProductComponent,
    CartComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
