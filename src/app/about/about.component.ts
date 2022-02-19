import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() title = new String;
  img:string = "patrick-tomasso-GXXYkSwndP4-unsplash.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
