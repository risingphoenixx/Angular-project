import { TestBed } from '@angular/core/testing';

import { ServiceMyUrlService } from './service-my-url.service';

describe('ServiceMyUrlService', () => {
  let service: ServiceMyUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMyUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
