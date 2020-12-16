import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnhancedProductSummaryComponent} from './enhanced-product-summary.component';
import {B2cStorefrontModule} from '@spartacus/storefront';


@NgModule({
  declarations: [EnhancedProductSummaryComponent],
  imports: [
    CommonModule,
    B2cStorefrontModule.withConfig({
      cmsComponents: {
        EnhancedProductSummaryComponent: {
          component: EnhancedProductSummaryComponent
        }
      }
    })
  ],
  exports: [EnhancedProductSummaryComponent]
})
export class EnhancedProductSummaryModule {
}
