import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word: string;
  @Input() size: number;

  constructor() {
  }

  ngOnInit() {
  }

}
