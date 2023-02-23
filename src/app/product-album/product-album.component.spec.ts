import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlbumComponent } from './product-album.component';

describe('ProductAlbumComponent', () => {
  let component: ProductAlbumComponent;
  let fixture: ComponentFixture<ProductAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
