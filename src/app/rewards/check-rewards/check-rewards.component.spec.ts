import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRewardsComponent } from './check-rewards.component';

describe('CheckRewardsComponent', () => {
  let component: CheckRewardsComponent;
  let fixture: ComponentFixture<CheckRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRewardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
