import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  @Input() title = new String;
  name: string = "Petra Christina Sedlaczek";


  constructor() { }

  ngOnInit(): void {
  }

}
