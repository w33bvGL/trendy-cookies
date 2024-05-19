import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent implements OnInit {
  currentCurrencyIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.initializePrices();
    this.changeCurrency();
  }

  initializePrices(): void {
    const prices = document.getElementsByClassName(
      'products-item-price'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < prices.length; i++) {
      const priceElement = prices[i];
      const basePrice = parseFloat(priceElement.innerText.replace('$', ''));
      priceElement.dataset['basePrice'] = basePrice.toString();
    }
  }

  async fetchExchangeRates(): Promise<{ [key: string]: number }> {
    const response = await fetch(
      'https://v6.exchangerate-api.com/v6/c3629d6b164a21829dce932d/latest/USD'
    );
    const data = await response.json();
    return data.conversion_rates;
  }

  async changeCurrency(): Promise<void> {
    console.log('sins');

    const prices = document.getElementsByClassName(
      'products-item-price'
    ) as HTMLCollectionOf<HTMLElement>;
    const currencyElement = document.querySelector('.currency') as HTMLElement;

    const currencySymbols: { [key: string]: string } = {
      USD: '$',
      RUB: '₽',
      AMD: '֏',
      EUR: '€',
      CNY: '¥',
    };

    const currencies = Object.keys(currencySymbols);
    let currentCurrencyIndex = this.currentCurrencyIndex;
    console.log(currentCurrencyIndex);
    const newCurrencyIndex = (currentCurrencyIndex + 1) % currencies.length;
    this.currentCurrencyIndex = newCurrencyIndex;
    console.log(newCurrencyIndex);
    const newCurrency = currencies[newCurrencyIndex];

    const exchangeRates = await this.fetchExchangeRates();
    if (!exchangeRates[newCurrency]) {
      console.error(`Exchange rate for ${newCurrency} not found.`);
      return;
    }

    const rate = exchangeRates[newCurrency];

    for (let i = 0; i < prices.length; i++) {
      const priceElement = prices[i];
      const basePrice = parseFloat(priceElement.dataset['basePrice'] || '1');
      const newPrice = basePrice * rate;
      priceElement.innerText = `${newPrice.toFixed(2)} ${newCurrency}`;
    }
    currencyElement.innerText = `${currencySymbols[newCurrency]}`;
  }
}
