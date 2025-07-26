import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);
  productId: string = '';
  product!: Product;
  quantity: number = 1;
  clothingCategories = ["men's clothing", "women's clothing", 'jewelery'];
  maxStars: number = 5;
  isFavorite: boolean = false;

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
  }

  increaseQty(): void {
    this.quantity++;
  }

  decreaseQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  getStars(): number[] {
    return Array(this.maxStars)
      .fill(0)
      .map((_, i) => i + 1);
  }
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
