import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { Dishes } from '../dishes';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:Dishes[] = dishes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
