import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchSugar {
  private switchSugar = new BehaviorSubject<string>('');

  selectedProduct = this.switchSugar.asObservable();

  switchSugarArray(product: any) {
    console.log('Отправлаю  ' + product)
    this.switchSugar.next(product);
  }
}
