import { Component, OnInit } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { interval } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

const PRODUCT_ID = ['358639', '932577', '1641905', '553637']

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss']
})
export class CustomBannerComponent implements OnInit {
productCode$ = interval(2000).pipe(
  map(()=> this.randomProductId())
)

product$ = this.productCode$.pipe(
  switchMap(code => this.productService.get(code)),
  filter(x => !!x)
)
  constructor(private productService: ProductService) { }

  randomProductId(): string{
    const index = Math.floor(Math.random() * PRODUCT_ID.length)
    return PRODUCT_ID[index]
  }
  ngOnInit(): void {
  }

}
