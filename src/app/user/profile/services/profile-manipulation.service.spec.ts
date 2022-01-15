import { TestBed } from '@angular/core/testing';

import { ProfileManipulationService } from './profile-manipulation.service';

describe('ProfileManipulationService', () => {
  let service: ProfileManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
