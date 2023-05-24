import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedFilterComponent } from './breed-filter.component';

describe('BreedFilterComponent', () => {
  let component: BreedFilterComponent;
  let fixture: ComponentFixture<BreedFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
