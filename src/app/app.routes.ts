import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productRoutes } from './product/product.routes';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', children: productRoutes },
  // ...productRoutes,
];
