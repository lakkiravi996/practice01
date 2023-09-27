import { TestBed } from '@angular/core/testing';

import { UsersshareService } from './usersshare.service';

describe('UsersshareService', () => {
  let service: UsersshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
