import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Ristorante Il Gambero Rosso';
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
