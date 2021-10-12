import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEndpointsComponent } from './user-endpoints.component';

describe('UserEndpointsComponent', () => {
  let component: UserEndpointsComponent;
  let fixture: ComponentFixture<UserEndpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEndpointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
