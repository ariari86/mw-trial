import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnhancedProductSummaryComponent} from './enhanced-product-summary.component';
import { provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [EnhancedProductSummaryComponent],
  imports: [
    CommonModule,
  ],
  exports: [EnhancedProductSummaryComponent],
  providers: [
    provideConfig({
    cmsComponents: {
      EnhancedProductSummaryComponent: {
        component: EnhancedProductSummaryComponent
      }
    }
  })]
})
export class EnhancedProductSummaryModule {
}
