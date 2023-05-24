import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedHeroComponent } from './breed-hero.component';

describe('BreedHeroComponent', () => {
  let component: BreedHeroComponent;
  let fixture: ComponentFixture<BreedHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
