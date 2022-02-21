import { Injectable } from '@angular/core';
import { Dishes } from './dishes';

@Injectable({
providedIn: 'root',
})
export class CartService {
items: Dishes[] = [];

constructor() {}

addToCart(dish: Dishes) {
  this.items.push(dish);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
}