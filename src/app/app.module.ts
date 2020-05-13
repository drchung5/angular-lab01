import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantBrazilBrazilComponent } from './restaurant-brazil-brazil/restaurant-brazil-brazil.component';
import { RestaurantFukiSushiComponent } from './restaurant-fuki-sushi/restaurant-fuki-sushi.component';
import { RestaurantLaTascaComponent } from './restaurant-la-tasca/restaurant-la-tasca.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantBrazilBrazilComponent,
    RestaurantFukiSushiComponent,
    RestaurantLaTascaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
