import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { SpartacusFeaturesModule } from './spartacus-features.module';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseStorefrontModule,
    SpartacusFeaturesModule,
    SpartacusConfigurationModule
  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
