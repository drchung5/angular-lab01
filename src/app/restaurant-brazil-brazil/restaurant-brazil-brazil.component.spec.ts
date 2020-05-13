import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBrazilBrazilComponent } from './restaurant-brazil-brazil.component';

describe('RestaurantBrazilBrazilComponent', () => {
  let component: RestaurantBrazilBrazilComponent;
  let fixture: ComponentFixture<RestaurantBrazilBrazilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantBrazilBrazilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBrazilBrazilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
