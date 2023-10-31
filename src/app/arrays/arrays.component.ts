import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css'],
})
export class ArraysComponent implements OnInit {
  example = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {}
}
