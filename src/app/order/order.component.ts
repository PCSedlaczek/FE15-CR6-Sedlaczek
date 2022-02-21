import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Dishes } from '../dishes';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items: Dishes[] = [];
  checkoutForm = this.fb.group({
    name: '',
    address: '',
    city: ''
  });

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }
  
   onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
