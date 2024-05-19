import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/ProductService';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  selectedProduct: string = '';

  orderForm = this.fb.group({
    product: ['', Validators.required],
    phone: ['', Validators.required],
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.productService.selectedProduct.subscribe((product) => {
      console.log('Получаю ' + product);
      this.orderForm.patchValue({
        product: product,
      });
    });
  }

  confrimOrder() {
    if (this.orderForm.valid) {
      // alert('Спосибо за заказ. Мы скоро свяжемся свами!');
      this.http.post("https://testologia.ru/cookies-order", this.orderForm.value)
      .subscribe({
        next: (response: any) => {
          alert(response.message);
          this.orderForm.reset();
        },
        error: (response: any) => {
          alert(response.error.message);
        }
      });
    }
  }
}
