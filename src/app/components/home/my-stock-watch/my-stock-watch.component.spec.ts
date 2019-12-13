import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStockWatchComponent } from './my-stock-watch.component';

describe('MyStockWatchComponent', () => {
  let component: MyStockWatchComponent;
  let fixture: ComponentFixture<MyStockWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStockWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStockWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
