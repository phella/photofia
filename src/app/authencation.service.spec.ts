import { TestBed, inject } from '@angular/core/testing';

import { AuthencationService } from './authencation.service';

describe('AuthencationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthencationService]
    });
  });

  it('should be created', inject([AuthencationService], (service: AuthencationService) => {
    expect(service).toBeTruthy();
  }));
});
