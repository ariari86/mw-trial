import { Component, OnInit } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { interval } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

const PRODUCT_ID = ['358639', '932577', '1641905', '553637', '1992693'];

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss'],
})
export class CustomBannerComponent implements OnInit {

  // 2 seconds delay and use a Random index of Array from RandomProduct function
  private productCode$ = interval(2000).pipe(map(() => this.randomProductId()));

  // map creates a new array with elements derived from each element of the original array by the callback function
  product$ = this.productCode$.pipe(
    switchMap((code) => this.productService.get(code)), // asign the Last value into Product$
    filter((x) => !!x) // find/filter x when x is not null and not Undefined
  // The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.
  );

  constructor(private productService: ProductService) {}

  randomProductId(): string { // Random Product Function and take a index of it randomly
    const index = Math.floor(Math.random() * PRODUCT_ID.length);
    return PRODUCT_ID[index];
  }

  ngOnInit(): void {}
}


// ** Pipes are simply a function that we can directly apply on any expression/value in a template to transform it into some other value. The value on which we are applying the pipe is the input for our pipe function. The value returned from that function will be replaced in place original value.
