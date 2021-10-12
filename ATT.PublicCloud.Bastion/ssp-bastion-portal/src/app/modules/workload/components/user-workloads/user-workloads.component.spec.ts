import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkloadsComponent } from './user-workloads.component';

describe('UserWorkloadsComponent', () => {
  let component: UserWorkloadsComponent;
  let fixture: ComponentFixture<UserWorkloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
