import { TestBed } from '@angular/core/testing';

import { GlobvarService } from './globvar.service';

describe('GlobvarService', () => {
  let service: GlobvarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobvarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
