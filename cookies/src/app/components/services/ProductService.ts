import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedProductSource = new BehaviorSubject<string>('');

  selectedProduct = this.selectedProductSource.asObservable();

  changeSelectedProduct(product: string) {
    console.log('Отправлаю  ' + product)
    this.selectedProductSource.next(product);
  }
}
