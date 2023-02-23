import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss']
})
export class CartQuantityComponent implements OnInit {

  private product$: Observable<Product> = this.currentProductService
  .getProduct()
  .pipe(filter(product => !!product))

  quantity$: Observable<number> = this.product$.pipe(
    switchMap((product: Product) => this.cartService.getEntry(product.code)),
    map((cart: OrderEntry)=> cart ? cart.quantity : 0)
  )

  constructor(private currentProductService: CurrentProductService, private cartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}
