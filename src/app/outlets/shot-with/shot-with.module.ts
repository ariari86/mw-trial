import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShotWithComponent} from './shot-with.component';
import {OutletRefModule} from '@spartacus/storefront';
import {IMAGES_NORMALIZER} from './service/shot-with.converter';
import {ShotWithNormalizer} from './service/shot-with.normalizer';


@NgModule({
  declarations: [ShotWithComponent],
  exports: [ShotWithComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  providers: [
    {provide: IMAGES_NORMALIZER, useClass: ShotWithNormalizer, multi: true}
  ]
})
export class ShotWithModule {
}
