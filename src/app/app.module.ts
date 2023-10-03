import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SellProductsComponent } from './component/sell-products/sell-products.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { StoreModule } from '@ngrx/store';
import { cartReducer, shopReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffectService } from './store/shop-effect.service';
import { environment } from 'src/environments/environment.development';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    LoginComponent,
    SellProductsComponent,
    DragDropDirective,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    StoreModule.forRoot({shop:shopReducer, cart:cartReducer}),
    EffectsModule.forRoot([ShopEffectService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
