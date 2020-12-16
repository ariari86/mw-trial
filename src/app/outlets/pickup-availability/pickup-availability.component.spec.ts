import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupAvailabilityComponent } from './pickup-availability.component';

describe('PickupAvailabilityComponent', () => {
  let component: PickupAvailabilityComponent;
  let fixture: ComponentFixture<PickupAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
