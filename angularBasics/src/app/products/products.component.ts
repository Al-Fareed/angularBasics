import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: '109',
      color: 'black',
      available: 'Available',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '109',
      color: 'black',
      available: 'Available',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '109',
      color: 'black',
      available: 'Not Available',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '109',
      color: 'black',
      available: 'Available',
    },
    {
      id: 5,
      name: 'Product 5',
      price: '109',
      color: 'black',
      available: 'Available',
    },
    {
      id: 6,
      name: 'Product 6',
      price: '109',
      color: 'black',
      available: 'Not Available',
    },
    
  ];
}
