import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedHeroSecondaryComponent } from './breed-hero-secondary.component';

describe('BreedHeroSecondaryComponent', () => {
  let component: BreedHeroSecondaryComponent;
  let fixture: ComponentFixture<BreedHeroSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedHeroSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedHeroSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
