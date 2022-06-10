import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([], {
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'corrected',
      initialNavigation: 'enabled',
    }),
  ]
})
export class AppRoutingModule { }
