import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardWorkloadsComponent } from './onboard-workloads.component';

describe('OnboardWorkloadsComponent', () => {
  let component: OnboardWorkloadsComponent;
  let fixture: ComponentFixture<OnboardWorkloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardWorkloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardWorkloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
