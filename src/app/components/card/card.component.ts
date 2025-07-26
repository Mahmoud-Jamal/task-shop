import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() item!: Product;
  maxStars: number = 5;

  getStars(): number[] {
    return Array(this.maxStars)
      .fill(0)
      .map((_, i) => i + 1);
  }
}
