import { TestBed } from '@angular/core/testing';

import { AppendStockService } from './append-stock.service';

describe('AppendStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppendStockService = TestBed.get(AppendStockService);
    expect(service).toBeTruthy();
  });
});
