import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickupAvailabilityComponent} from './pickup-availability.component';
import {OutletRefModule} from '@spartacus/storefront';


@NgModule({
  declarations: [PickupAvailabilityComponent],
  exports: [PickupAvailabilityComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class PickupAvailabilityModule {
}
