import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBinaryAllowListComponent } from './view-binary-allow-list.component';

describe('ViewBinaryAllowListComponent', () => {
  let component: ViewBinaryAllowListComponent;
  let fixture: ComponentFixture<ViewBinaryAllowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBinaryAllowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBinaryAllowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
