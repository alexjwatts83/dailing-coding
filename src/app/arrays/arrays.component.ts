import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css'],
})
export class ArraysComponent implements OnInit {
  example = [1, 2, 3, 4, 5];
  product?: number[];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.product = this.getProduct(this.example);
    }, 1000);
  }

  private getProduct(arr: number[]): number[] {
    var product = [];
    for (let i = 0; i < arr.length; i++) {
      let result = 0;
      console.group(`i=${i},result=${result}`);
      for (let j = 0; j < arr.length; j++) {
        if (i === j) {
          console.log('i === j', {i, j});
          continue;
        }
        let res = arr[i] * arr[j];
        console.log(`${arr[i]} * ${arr[j]} = ${res}`);
        if (result === 0) {
          result = res;
        } else {
          result = result * res;
        }
        console.log(`result=${result}`);
      }
      product.push(result);
      console.group(`result=${result}`);
      console.groupEnd();
    }
    return product;
  }
}
