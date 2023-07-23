import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { GuardService } from './service/guard.service';
import { SellProductsComponent } from './component/sell-products/sell-products.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: "full"},
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductsComponent, canActivate: [GuardService]},
  {path:'cart', component: CartComponent, canActivate: [GuardService]},
  {path: 'sellproducts', component: SellProductsComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
