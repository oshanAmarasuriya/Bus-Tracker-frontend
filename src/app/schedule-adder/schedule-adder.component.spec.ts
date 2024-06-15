import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAdderComponent } from './schedule-adder.component';

describe('ScheduleAdderComponent', () => {
  let component: ScheduleAdderComponent;
  let fixture: ComponentFixture<ScheduleAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleAdderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
