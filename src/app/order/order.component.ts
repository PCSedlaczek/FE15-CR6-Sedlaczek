import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Dishes } from "../dishes";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  items: Dishes[] = [];
  order: Dishes[] = [];
  total: number = 0;
  service: number = 0;
  discount: number = 0;
  fullTotal: number = 0;
  orderTotal: number = 0;

  checkoutForm = this.fb.group({
    name: "",
    address: "",
    city: ""
  });

  constructor(
    private cartService: CartService, 
    private fb: FormBuilder) { }

  getTotal() {
    for (let val of this.items) {
      this.total += val.price;
    }
  }

  getService() {
    this.service = this.total  / 100 * 10
  }

  getDiscount() {
    if (this.total > 40) {
      this.discount = this.total  / 100 * 15
    } 
  }

  getFullTotal() {
    this.fullTotal = this.total + this.service - this.discount
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.service = 0;
    this.discount = 0;
    this.fullTotal = 0;
  }
  
   onSubmit() {
    this.order = this.items;
    this.orderTotal = this.fullTotal;
    console.warn("New order submitted", this.order, this.checkoutForm.value);
    this.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.getTotal();
    this.getService();
    this.getDiscount();
    this.getFullTotal();
  }

}
