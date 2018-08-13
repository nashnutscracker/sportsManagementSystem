import { TestBed, inject } from '@angular/core/testing';

import { DeactivateService } from './deactivate.service';

describe('DeactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateService]
    });
  });

  it('should be created', inject([DeactivateService], (service: DeactivateService) => {
    expect(service).toBeTruthy();
  }));
});
