import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // @Input() products: Product; // Es el que me permite recibir datos de otro componente
  // @Output() productClicked: EventEmitter<any> = new EventEmitter(); // Es el que me permite enviar o emitir datos a otro componente

  public products: Product[];

  constructor() {

    this.products = [
      {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '2',
        image: 'assets/images/hoodie.png',
        title: 'Hoodie',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '3',
        image: 'assets/images/mug.png',
        title: 'Mug',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '4',
        image: 'assets/images/pin.png',
        title: 'Pin',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '5',
        image: 'assets/images/stickers1.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '6',
        image: 'assets/images/stickers2.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      }
    ];
  }

  ngOnInit(): void {
  }

  // addCart(): any{
  //  console.log('añadir al carrito');
  //  this.productClicked.emit(this.products.id);
  // }

  clickedEmitter(id: number): any {
    console.log(id);
  }

}
