import {Component, OnInit} from '@angular/core';
import {CurrentProductService} from '@spartacus/storefront';

@Component({
  selector: 'app-pickup-availability',
  templateUrl: './pickup-availability.component.html',
  styleUrls: ['./pickup-availability.component.scss']
})
export class PickupAvailabilityComponent {
  public product$ = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {
  }

}
