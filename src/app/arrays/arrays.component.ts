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
      this.product = this.getProductUsingDivision(this.example);
    }, 1000);
  }

  private getProductUsingDivision(arr: number[]): number[] {
    var product = [];
    var finalResult = arr[0];
    for (let i = 1; i < arr.length; i++) {
      finalResult *= arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
      product.push(finalResult/arr[i]);
    }
    return product;
  }

  private getProduct2(arr: number[]): number[] {
    var product = [];
    var value = arr[0];
    for (let i = 1; i < arr.length; i++) {
      value =  value * arr[i];
      product.push(value);
      value = arr[i];
    }
    product.push(value * arr[0]);
    return product;
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
