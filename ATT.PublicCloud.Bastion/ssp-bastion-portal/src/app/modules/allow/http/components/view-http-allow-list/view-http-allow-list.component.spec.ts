import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHttpAllowListComponent } from './view-http-allow-list.component';

describe('ViewHttpAllowListComponent', () => {
  let component: ViewHttpAllowListComponent;
  let fixture: ComponentFixture<ViewHttpAllowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHttpAllowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHttpAllowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
