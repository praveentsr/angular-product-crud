import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateValidationsComponent } from './product-create-validations.component';

describe('ProductCreateValidationsComponent', () => {
  let component: ProductCreateValidationsComponent;
  let fixture: ComponentFixture<ProductCreateValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
