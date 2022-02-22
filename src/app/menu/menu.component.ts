import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dishes, dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dishes[] = dishes;
  dish: Dishes = {} as Dishes;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(dish: Dishes) {
    this.cartService.addToCart(dish);
    }

  ngOnInit(): void {
    
  }

}
