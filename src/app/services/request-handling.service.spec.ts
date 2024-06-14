import { TestBed } from '@angular/core/testing';

import { RequestHandlingService } from './request-handling.service';

describe('RequestHandlingService', () => {
  let service: RequestHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
