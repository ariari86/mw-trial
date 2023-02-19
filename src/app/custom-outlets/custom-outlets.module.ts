
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule, OutletRefModule, ProductListModule } from '@spartacus/storefront';
import { RecentlyBoughtComponent } from '../recently-bought/recently-bought.component';
import { ShotWithComponent } from '../shot-with/shot-with.component';
import { CartQuantityComponent } from './cart-quantity/cart-quantity.component';
import { CustomOutletsComponent } from './custom-outlets/custom-outlets.component';
import { RecentlyViewComponent } from './recently-view/recently-view.component';
import { UpsellingComponent } from './upselling/upselling.component';


@NgModule({
  declarations: [
    CustomOutletsComponent,
    UpsellingComponent,
    CartQuantityComponent,
    RecentlyViewComponent,
    ShotWithComponent,
    RecentlyBoughtComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule,
    RouterModule,
    CarouselModule,
    MediaModule,
    UrlModule
  ],
  exports: [CustomOutletsComponent]

})
export class CustomOutletsModule {}
