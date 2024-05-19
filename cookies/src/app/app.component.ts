import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { ProductsComponent } from './components/products/products.component';
import { LoveComponent } from './components/love/love.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrencyComponent } from './components/currency/currency.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    PrimaryHeaderComponent,
    ProductsComponent,
    LoveComponent,
    OrderComponent,
    FooterComponent,
    CurrencyComponent,
  ],
})
export class AppComponent {
  title = 'Trendy Cookies';
}
