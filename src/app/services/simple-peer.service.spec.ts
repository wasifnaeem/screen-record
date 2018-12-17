import { TestBed } from '@angular/core/testing';

import { SimplePeerService } from './simple-peer.service';

describe('SimplePeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimplePeerService = TestBed.get(SimplePeerService);
    expect(service).toBeTruthy();
  });
});
