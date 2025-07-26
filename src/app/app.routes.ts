import { Routes } from '@angular/router';
import { productResolver } from './guards/product-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./components/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
    resolve: {
      product: productResolver,
    },
  },
];
