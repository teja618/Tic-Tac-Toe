import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-square',
  templateUrl: './app-square.component.html',
  styleUrls: ['./app-square.component.css']
})
export class AppSquareComponent implements OnInit {

  @Input() value: 'X' | 'O' ;

  constructor() { }

  ngOnInit(): void {
  }

}
