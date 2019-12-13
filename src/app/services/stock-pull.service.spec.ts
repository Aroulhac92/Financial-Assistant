import { TestBed } from '@angular/core/testing';

import { StockPullService } from './stock-pull.service';

describe('StockPullService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockPullService = TestBed.get(StockPullService);
    expect(service).toBeTruthy();
  });
});
