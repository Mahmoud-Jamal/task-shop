import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  constructor() {}

  getAllProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
}
