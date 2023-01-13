import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasSavedGuard } from '../utils/has-saved.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

export const productRoutes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'new',
    component: ProductFormComponent,
    canDeactivate: [HasSavedGuard],
  },
  {
    path: 'new/:id',
    component: ProductFormComponent,
    canDeactivate: [HasSavedGuard],
  },
];
