import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css'],
})
export class ArraysComponent implements OnInit {
  example = [1, 2, 3, 4, 5];
  product?: number[];

  prefix?: number[];
  suffix?: number[];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.product = this.getProductNotUsingDivision(this.example);
    }, 1000);
  }

  private getProductNotUsingDivision(arr: number[]): number[] {
    var product: number[] = [];
    console.log({ arr });
    console.group('sumForward');
    this.prefix = [];
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (i === 0) {
        this.prefix.push(num);
      } else {
        this.prefix.push(num * arr[i - 1]);
      }
    }
    console.groupEnd();
    console.log({ sumForward: this.prefix });

    console.group('sumReversed');
    this.suffix = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      let num = arr[i];
      if (i === arr.length - 1) {
        this.suffix.push(num);
      } else {
        this.suffix.push(num * arr[i + 1]);
      }
      console.log({
        i,
        num,
        sumReversed: JSON.parse(JSON.stringify(this.suffix)),
      });
    }
    console.groupEnd();
    console.log({ sumReversed: this.suffix });
    this.suffix = this.suffix.reverse();
    console.log({ sumReversed: this.suffix });

    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (i === 0) {
        product.push(this.suffix[i + 1]);
      } else if (i === arr.length - 1) {
        product.push(this.prefix[i - 1]);
      } else {
        product.push(this.prefix[i - 1] * this.suffix[i + 1]);
      }
    }

    return product;
  }

  private getProductUsingDivision(arr: number[]): number[] {
    var product = [];
    var finalResult = arr[0];
    for (let i = 1; i < arr.length; i++) {
      finalResult *= arr[i];
    }

    console.log({ arr });
    console.group('sumForward');
    this.prefix = [];
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (i === 0) {
        this.prefix.push(num);
      } else {
        this.prefix.push(num * arr[i - 1]);
      }
    }
    console.groupEnd();
    console.log({ sumForward: this.prefix });

    console.group('sumReversed');
    this.suffix = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      let num = arr[i];
      if (i === arr.length - 1) {
        this.suffix.push(num);
      } else {
        this.suffix.push(num * arr[i + 1]);
      }
      console.log({
        i,
        num,
        sumReversed: JSON.parse(JSON.stringify(this.suffix)),
      });
    }
    console.groupEnd();
    console.log({ sumReversed: this.suffix });

    for (let i = 0; i < arr.length; i++) {
      product.push(finalResult / arr[i]);
    }
    return product;
  }

  private getProduct2(arr: number[]): number[] {
    var product = [];
    var value = arr[0];
    for (let i = 1; i < arr.length; i++) {
      value = value * arr[i];
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
          console.log('i === j', { i, j });
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
