import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/ProductService';

import {HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productsList: any;

  productsMassive = [
    {
      title: 'Лучшие друзья',
      text: 'Печенье, с которого все началось! Наше фирменное печенье с шоколадной крошкой и грецкими орехами хрустящее снаружи с достаточно толстой и липкой серединкой.',
      price: '20 $',
      weight: '2 шт./ 200 гр.',
      image: '../../../assets/img/1.png',
    },
    {
      title: 'Шоколадный француз',
      text: 'Это печенье, изготовленное из темного французского какао и полусладкой шоколадной стружки, наверняка удовлетворит даже самого заядлого любителя шоколада.',
      price: '20 $',
      weight: '2 шт./ 200 гр.',
      image: '../../../assets/img/2.png',
    },
    {
      title: 'Овсянка с изюмом, Сэр!',
      text: 'Это сдобное маслянистое печенье весом шесть унций каждое, золотисто-коричневое снаружи, влажное внутри и наполненное пухлым сладким изюмом.',
      price: '20 $',
      weight: '2 шт./ 200 гр.',
      image: '../../../assets/img/3.png',
    },
    {
      title: 'Шоколадное наслаждение',
      text: 'Идеально хрустящее снаружи и достаточно густое и липкое в центре, это печенье наполнено полусладкой и тёмной шоколадной стружкой, придающей богатую глубину вкуса.',
      price: '20 $',
      weight: '2 шт./ 200 гр.',
      image: '../../../assets/img/4.png',
    },
    {
      title: 'Арахисовый рай',
      text: 'Сладкое, пикантное и идеально сбалансированное печенье удовлетворяет тягу любителей арахисового масла и шоколада.',
      price: '20 $',
      weight: '2 шт./ 200 гр.',
      image: '../../../assets/img/5.png',
    },
    {
      title: 'Шоколадный ореховый деликатес',
      text: 'Наша фирменная рецептура печенья с шоколадными крошками и грецкими орехами гарантирует незабываемый вкусовой опыт. Каждое печенье хрустит снаружи, но раскрывает внутри нежную сердцевину.',
      price: '20 $',
      weight: '2 шт./ 200 гр.',
      image: '../../../assets/img/6.png',
    },
    {
      title: 'Ассорти фирменного печенья',
      text: 'Зачем выбирать один, когда можно получить их все? Наш классический ассортимент печенья включает в себя по одному из четырёх оригинальных вкусов печенья.',
      price: '36 $',
      weight: '4 шт./ 400 гр.',
      image: '../../../assets/img/7.png',
    },
    {
      title: 'Лимонное печенье',
      text: 'Весна уже не за горами, но нам не терпелось подарить вам немного солнечного света: наше первое лимонное печенье. Это лакомство жевательное, лимонное, не слишком сладкое и даже немного… освежающее?',
      price: '33 $',
      weight: '4 шт./ 400 гр.',
      image: '../../../assets/img/8.png',
    },
    {
      title: 'Любители шоколада',
      text: 'Вам больше не нужно выбирать фаворитов. Мы сделали этот набор для всех людей, которые действительно любят шоколад…',
      price: '38 $',
      weight: '4 шт./ 400 гр.',
      image: '../../../assets/img/9.png',
    },
    {
      title: 'Карамель и кокос',
      text: 'Побалуйте себя кокосовым, маслянистым, карамельным печеньем, которое обладает невиданным ранее вкусом и текстурой. Наслаждение круглый год.',
      price: '33 $',
      weight: '4 шт./ 400 гр.',
      image: '../../../assets/img/10.png',
    },
    {
      title: 'Веганское с шоколадной крошкой',
      text: 'Наше веганское безглютеновое печенье содержит кусочки хрустящих грецких орехов и полусладкую веганскую шоколадную стружку.',
      price: '39 $',
      weight: '4 шт./ 400 гр.',
      image: '../../../assets/img/11.png',
    },
    {
      title: 'Крем-брюле ореховое печенье',
      text: 'Используя уникальную смесь ингредиентов, мы создали печенье с кусочками крем-брюле и миндальными орехами, которое обещает неповторимые гастрономические ощущения. Каждый кусочек обладает хрустящей корочкой и тает во рту.',
      price: '39 $',
      weight: '4 шт./ 400 гр.',
      image: '../../../assets/img/12.png',
    },
  ];

  constructor(private productService: ProductService, private http: HttpClient) {}

  ngOnInit() {
    // по умолчанию показоваю без соли ))) 
    this.http.get("https://testologia.ru/cookies").subscribe(data => this.productsList = data);
  }

  simpleBuy(scrollTo: string, order: string, price: string): void {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      let text = order + " " + price + "$";
      this.productService.changeSelectedProduct(text);
    } else {
      console.error(`Element with ID '${scrollTo}' not found.`);
    }
  }

  switchSugarFree(e: any) {
    this.http.get("https://testologia.ru/cookies" + (e.currentTarget.checked ? '?sugarfree' : ''))
      .subscribe(data => {
        console.log(data);
        this.productsList = data;
      } );
  }
}
