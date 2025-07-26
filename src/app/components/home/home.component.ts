import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allProducts: Product[] = [];
  filterProduct: Product[] = [];
  categories: any[] = [];

  checkedArr: any[] = [];
  sortOption: WritableSignal<string | null> = signal('');
  searchValue: WritableSignal<string> = signal('');
  private readonly productService = inject(ProductService);
  private readonly sharedService = inject(SharedService);

  ngOnInit(): void {
    this.allProduct();
    this.sharedService.trigger$.subscribe(() => {
      this.sorting();
      this.search();
    });
  }

  allProduct(): void {
    this.productService
      .getAllProducts()

      .subscribe({
        next: (products) => {
          this.allProducts = products;
          this.filterProduct = [...products];
          console.log(this.allProducts);
          this.getCategories();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getCategories(): void {
    this.categories = Array.from(
      new Set(this.allProducts.map((item) => item.category))
    ).map((category) => ({ category }));
    console.log(this.categories);
  }

  sorting() {
    this.sortOption.set(this.sharedService.sortOption());
    const option = this.sortOption();
    console.log(option);

    switch (option) {
      case 'priceLow':
        this.allProducts = this.allProducts.sort((a, b) => a.price - b.price);
        break;

      case 'priceHigh':
        this.allProducts = this.allProducts.sort((a, b) => b.price - a.price);
        break;

      case 'max rating':
        this.allProducts = this.allProducts.sort(
          (a, b) => b.rating.rate - a.rating.rate
        );
        break;

      case 'min rating':
        this.allProducts = this.allProducts.sort(
          (a, b) => a.rating.rate - b.rating.rate
        );
        break;

      case 'nameAsc':
        this.allProducts = this.allProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case 'nameDesc':
        this.allProducts = this.allProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      default:
        console.warn(`Unknown sort option: ${option}`);
        return;
    }

    console.log(this.allProducts);
  }

  search() {
    this.searchValue.set(this.sharedService.searchValue());
    console.log(this.searchValue());

    this.filterProduct = this.allProducts.filter((item) =>
      item.title?.toLowerCase().includes(this.searchValue().toLowerCase())
    );
    console.log(this.filterProduct);
  }

  filtration(e: any) {
    if (e.target.checked) {
      this.checkedArr.push(e.target.value);
    } else {
      this.checkedArr.splice(this.checkedArr.indexOf(e.target.value), 1);
    }
    console.log(this.checkedArr);
    this.filterProduct = this.allProducts.filter((item) =>
      this.checkedArr.length === 0
        ? true
        : this.checkedArr.includes(item.category)
    );
    console.log(this.filterProduct);
  }
}
