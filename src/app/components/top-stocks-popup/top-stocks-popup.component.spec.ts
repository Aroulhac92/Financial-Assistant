import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStocksPopupComponent } from './top-stocks-popup.component';

describe('TopStocksPopupComponent', () => {
  let component: TopStocksPopupComponent;
  let fixture: ComponentFixture<TopStocksPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStocksPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStocksPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
