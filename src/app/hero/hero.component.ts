import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() title = new String;
  slogan: string = "Delivering great food for more than 18 years!";
  menuBtn: string = "Our Menu";
  tableBtn: string = "Book a Table";

  constructor() { }

  ngOnInit(): void {
  }

}
