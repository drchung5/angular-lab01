import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFukiSushiComponent } from './restaurant-fuki-sushi.component';

describe('RestaurantFukiSushiComponent', () => {
  let component: RestaurantFukiSushiComponent;
  let fixture: ComponentFixture<RestaurantFukiSushiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFukiSushiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFukiSushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
