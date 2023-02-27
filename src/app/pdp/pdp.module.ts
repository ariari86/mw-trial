import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule } from "@spartacus/core";
import { CustomProductSummaryComponent } from "./custom-product-summary/custom-product-summary.component";


@NgModule({
  declarations: [
    CustomProductSummaryComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent
        }
      }
    } as CmsConfig)
  ]
})

export class PdpModule {}
