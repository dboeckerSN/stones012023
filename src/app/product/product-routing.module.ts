import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasSavedGuard } from '../utils/has-saved.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/new',
    component: ProductFormComponent,
    canDeactivate: [HasSavedGuard],
  },
  {
    path: 'products/new/:id',
    component: ProductFormComponent,
    canDeactivate: [HasSavedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
