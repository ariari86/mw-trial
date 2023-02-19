import { Injectable } from "@angular/core";
import { Product } from "@spartacus/core";
import { CurrentProductService } from "@spartacus/storefront";
import { BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RecentlyViewService {
  recentlyViewedproducts$ = new BehaviorSubject<Product[]>([])
  private product$ = this.currentService.getProduct().pipe(
    filter(x => !!x),
    map(x => x)
  )

  constructor(private currentService: CurrentProductService){
    this.product$.subscribe(product => {
      let recentView = this.recentlyViewedproducts$.value.filter(x => x !== null)
      recentView.push(product)
      recentView = recentView.filter(x => x !== null)

      this.recentlyViewedproducts$.next(recentView)
    })
  }
}
