import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@spartacus/storefront';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProductAlbumComponent } from './product-album/product-album.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductAlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
