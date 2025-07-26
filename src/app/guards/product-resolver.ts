import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<any> = (route) => {
  const productService = inject(ProductService);
  const id = Number(route.paramMap.get('id'));
  return productService.getSingleProduct(id);
};
