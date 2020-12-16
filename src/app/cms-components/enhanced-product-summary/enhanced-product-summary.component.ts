import {Component} from '@angular/core';
import {CurrentProductService, ProductSummaryComponent} from '@spartacus/storefront';

@Component({
  selector: 'app-enhanced-product-summary',
  templateUrl: './enhanced-product-summary.component.html',
  styleUrls: ['./enhanced-product-summary.component.scss']
})
export class EnhancedProductSummaryComponent extends ProductSummaryComponent {

  constructor(protected currentProductService: CurrentProductService) {
    super(currentProductService);
  }

}
