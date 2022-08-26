import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ProductItemDetailComponent} from './product-item-detail/product-item-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ConfirmationComponent} from "./confirmation/confirmation.component";

const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "cart", component: CartComponent},
  {path: "product-details/:id", component: ProductItemDetailComponent},
  {path: "confirmation", component: ConfirmationComponent},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
