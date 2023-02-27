import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule } from "@spartacus/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      logoutConfig: {
        enable: false,
        logoutTimeout: 5000
      }
    } as CmsConfig)
  ]
})

export class SessionModule {}
