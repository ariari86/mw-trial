import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnhancedProductSummaryModule} from './enhanced-product-summary/enhanced-product-summary.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnhancedProductSummaryModule
  ],
  exports: [
    EnhancedProductSummaryModule
  ]
})
export class CmsComponentsModule { }
