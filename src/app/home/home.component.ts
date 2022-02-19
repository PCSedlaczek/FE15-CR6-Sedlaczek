import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() title = new String;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
