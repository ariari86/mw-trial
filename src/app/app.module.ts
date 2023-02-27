import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@spartacus/storefront';
import { CmsConfig, Config, ConfigModule } from '@spartacus/core';
import { LogoutConfig } from './session/logout-config';
import { CustomOutletsModule } from './custom-outlets/custom-outlets.module';
import { ProductAlbumComponent } from './product-album/product-album.component';

export const translationOverWrites = {
  en:{
    mw:{
      logo:{
        alt: 'Mediewerft'
      }
    }
  }
}

@NgModule(
  {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomOutletsModule,
    ConfigModule.withConfig(
      {logoutConfig:
        {
          enable: false,
          logoutTimeout: 5000
        }
      } as CmsConfig
      )
    ],
    providers: [
      { provide: LogoutConfig, useExisting: Config }
    ],
    bootstrap:
     [AppComponent]
    })

    export class AppModule { }
