import { TestBed } from '@angular/core/testing';

import { LocationCaptureService } from '../location-capture.service';

describe('LocationCaptureService', () => {
  let service: LocationCaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationCaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
