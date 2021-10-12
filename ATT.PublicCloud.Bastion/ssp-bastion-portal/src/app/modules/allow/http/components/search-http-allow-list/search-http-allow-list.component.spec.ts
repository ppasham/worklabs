import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHttpAllowListComponent } from './search-http-allow-list.component';

describe('SearchHttpAllowListComponent', () => {
  let component: SearchHttpAllowListComponent;
  let fixture: ComponentFixture<SearchHttpAllowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHttpAllowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHttpAllowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
