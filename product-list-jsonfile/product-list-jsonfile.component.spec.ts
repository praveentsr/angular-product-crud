import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListJsonfileComponent } from './product-list-jsonfile.component';

describe('ProductListJsonfileComponent', () => {
  let component: ProductListJsonfileComponent;
  let fixture: ComponentFixture<ProductListJsonfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListJsonfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListJsonfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
