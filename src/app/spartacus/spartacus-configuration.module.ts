import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from '@spartacus/storefront';
import { translations, translationChunksConfig } from '@spartacus/assets';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [

    provideConfig(
      {
        backend: {
          occ: {
            baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443'
          }
        },
        context: {
          currency: ['USD'],
          language: ['en'],
        },
        i18n: {
          resources: translations,
          chunks: translationChunksConfig,
          fallbackLang: 'en'
        },
        features: {
          level: '3.0'
        }
      }
    ),
    provideConfig({
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      },
    }),
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
  
  ]
})
export class SpartacusConfigurationModule { }
