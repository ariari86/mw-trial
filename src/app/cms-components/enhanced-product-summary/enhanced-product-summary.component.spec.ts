import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedProductSummaryComponent } from './enhanced-product-summary.component';

describe('EnhancedProductSummaryComponent', () => {
  let component: EnhancedProductSummaryComponent;
  let fixture: ComponentFixture<EnhancedProductSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancedProductSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
