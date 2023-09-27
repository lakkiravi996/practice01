import { TestBed } from '@angular/core/testing';

import { UsershareService } from './usershare.service';

describe('UsershareService', () => {
  let service: UsershareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsershareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
