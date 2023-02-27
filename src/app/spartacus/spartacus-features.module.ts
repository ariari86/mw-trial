import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsmComponentsModule } from "@spartacus/asm/components";
import { AsmOccModule } from "@spartacus/asm/occ";
import { OrderConfirmationModule, ReplenishmentOrderConfirmationModule } from "@spartacus/checkout/components";
import { CheckoutCoreModule } from "@spartacus/checkout/core";
import { CheckoutOccModule } from "@spartacus/checkout/occ";
import {
  AnonymousConsentsModule,
  AuthModule,
  CartModule,
  CartOccModule,
  CostCenterOccModule,
  ExternalRoutesModule,
  ProductModule,
  ProductOccModule,
  UserOccModule
} from '@spartacus/core';
import { QualtricsComponentsModule } from "@spartacus/qualtrics/components";
import {
  AddressBookModule,
  AnonymousConsentManagementBannerModule,
  AnonymousConsentsDialogModule,
  BannerCarouselModule,
  BannerModule,
  BreadcrumbModule,
  CartComponentModule,
  CartPageEventModule,
  CategoryNavigationModule,
  CmsParagraphModule,
  ConsentManagementModule,
  FooterNavigationModule,
  GenericLinkModule,
  HamburgerMenuModule,
  LinkModule,
  MyCouponsModule,
  MyInterestsModule,
  NavigationModule,
  NotificationPreferenceModule,
  OutletPosition,
  PaymentMethodsModule,
  ProductCarouselModule,
  ProductDetailsPageModule,
  ProductFacetNavigationModule,
  ProductImagesModule,
  ProductIntroModule,
  ProductListingPageModule,
  ProductListModule,
  ProductPageEventModule,
  ProductReferencesModule,
  ProductSummaryModule,
  ProductTabsModule,
  provideOutlet,
  SearchBoxModule,
  SiteContextSelectorModule,
  StockNotificationModule,
  TabParagraphContainerModule,
  UserComponentModule,
  WishListModule
} from '@spartacus/storefront';
import { CloseAccountModule, ForgotPasswordModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule } from "@spartacus/user/profile/components";
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { UserFeatureModule } from './features/user/user-feature.module';
import { AsmFeatureModule } from './features/asm/asm-feature.module';
import { QualtricsFeatureModule } from './features/qualtrics/qualtrics-feature.module';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';
import { CustomBannerComponent } from '../custom-banner/custom-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductAlbumComponent } from '../product-album/product-album.component';
import { PdpModule } from '../pdp/pdp.module';


@NgModule({
  declarations: [CustomHeaderComponent, InformationBarComponent, CustomBannerComponent, ProductAlbumComponent],
  imports: [
    CommonModule,
    AsmComponentsModule,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ExternalRoutesModule,
    AnonymousConsentManagementBannerModule,
    HamburgerMenuModule,
    CmsParagraphModule,
    LinkModule,
    BannerModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    SearchBoxModule,
    SiteContextSelectorModule,
    QualtricsComponentsModule,
    AddressBookModule,
    ProductListModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    PaymentMethodsModule,
    ConsentManagementModule,
    CartComponentModule,
    TabParagraphContainerModule,
    OrderConfirmationModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    BannerCarouselModule,
    MyCouponsModule,
    WishListModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ReplenishmentOrderConfirmationModule,
    UserComponentModule,
    CloseAccountModule,
    UpdateEmailModule,
    UpdatePasswordModule,
    UpdateProfileModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    AnonymousConsentsDialogModule,
    AuthModule.forRoot(),
    AnonymousConsentsModule.forRoot(),
    CartModule.forRoot(),
    CheckoutCoreModule,
    ProductModule.forRoot(),
    CartPageEventModule,
    ProductPageEventModule,
    AsmOccModule,
    CartOccModule,
    CheckoutOccModule,
    ProductOccModule,
    ProductListModule,
    UserOccModule,
    CostCenterOccModule,
    CheckoutFeatureModule,
    UserFeatureModule,
    AsmFeatureModule,
    QualtricsFeatureModule,
    GenericLinkModule,
    FontAwesomeModule,
    PdpModule
  ],
  providers: [
    provideOutlet({
      id: 'UpSelling',
      position: OutletPosition.BEFORE,
      component: ProductAlbumComponent,
    }),
    provideOutlet({
      id: 'SiteLogo',
      position: OutletPosition.REPLACE,
      component: CustomHeaderComponent,
    }),
    provideOutlet({
      id: 'BottomHeaderSlot',
      position: OutletPosition.REPLACE,
      component: InformationBarComponent,
    }),
    provideOutlet({
      id: 'Section1',
      position: OutletPosition.REPLACE,
      component: CustomBannerComponent,
    }),
  ]
})
export class SpartacusFeaturesModule { }
