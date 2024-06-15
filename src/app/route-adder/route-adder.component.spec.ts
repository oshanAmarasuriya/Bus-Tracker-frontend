import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdderComponent } from './route-adder.component';

describe('RouteAdderComponent', () => {
  let component: RouteAdderComponent;
  let fixture: ComponentFixture<RouteAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteAdderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
