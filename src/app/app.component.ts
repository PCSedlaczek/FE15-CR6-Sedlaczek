import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ristorante Il Gambero Rosso';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    // Set page title from title property
    this.titleService.setTitle(this.title);
  }
}