import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailsComponent} from './service/category-details/category-details.component';
import {ProductDetailsComponent} from './service/product-details/product-details.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'category/:id', component: CategoryDetailsComponent},
  {path: 'product/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
