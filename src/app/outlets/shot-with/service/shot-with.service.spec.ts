import { TestBed } from '@angular/core/testing';

import { ShotWithService } from './shot-with.service';

describe('ShotWithService', () => {
  let service: ShotWithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShotWithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
