import { TestBed } from '@angular/core/testing';

import { WifiInfoService } from './wifi-info.service';

describe('WifiInfoService', () => {
  let service: WifiInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WifiInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
