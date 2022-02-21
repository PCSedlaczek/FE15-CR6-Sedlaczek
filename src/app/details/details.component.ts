import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { Dishes } from '../dishes';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dish: Dishes = {} as Dishes;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  addToCart() {
    window.alert('Dish has been added to the cart!');
    this.cartService.addToCart(this.dish);
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishID'];
      this.dish = dishes[this.id];
    });
  }

}
