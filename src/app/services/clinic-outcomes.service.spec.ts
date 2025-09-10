import { TestBed } from '@angular/core/testing';

import { ClinicOutcomesService } from './clinic-outcomes.service';

describe('ClinicOutcomesService', () => {
  let service: ClinicOutcomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicOutcomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
