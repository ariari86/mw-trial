import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets.component';
import {PickupAvailabilityModule} from './pickup-availability/pickup-availability.module';
import {ShotWithModule} from './shot-with/shot-with.module';



@NgModule({
  declarations: [OutletsComponent],
  exports: [
    OutletsComponent
  ],
  imports: [
    CommonModule,
    PickupAvailabilityModule,
    ShotWithModule
  ]
})
export class OutletsModule { }
