import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { Dishes, dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'detail',
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
    this.cartService.addToCart(this.dish);
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["dishID"];
      this.dish = dishes[this.id];
    });
  }

}
