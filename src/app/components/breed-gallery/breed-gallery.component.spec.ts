import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedGalleryComponent } from './breed-gallery.component';

describe('BreedGalleryComponent', () => {
  let component: BreedGalleryComponent;
  let fixture: ComponentFixture<BreedGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
