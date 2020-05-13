import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLaTascaComponent } from './restaurant-la-tasca.component';

describe('RestaurantLaTascaComponent', () => {
  let component: RestaurantLaTascaComponent;
  let fixture: ComponentFixture<RestaurantLaTascaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantLaTascaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLaTascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
