import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStocksComponent } from './tech-stocks.component';

describe('TechStocksComponent', () => {
  let component: TechStocksComponent;
  let fixture: ComponentFixture<TechStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
