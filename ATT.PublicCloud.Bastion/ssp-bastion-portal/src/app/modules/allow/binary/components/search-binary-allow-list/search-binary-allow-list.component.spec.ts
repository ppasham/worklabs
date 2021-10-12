import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBinaryAllowListComponent } from './search-binary-allow-list.component';

describe('SearchBinaryAllowListComponent', () => {
  let component: SearchBinaryAllowListComponent;
  let fixture: ComponentFixture<SearchBinaryAllowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBinaryAllowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBinaryAllowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
