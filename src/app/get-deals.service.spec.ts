import { TestBed } from '@angular/core/testing';

import { GetDealsService } from './get-deals.service';

describe('GetDealsService', () => {
  let service: GetDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
