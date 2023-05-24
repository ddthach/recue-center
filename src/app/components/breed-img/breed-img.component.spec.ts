import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedImgComponent } from './breed-img.component';

describe('BreedImgComponent', () => {
  let component: BreedImgComponent;
  let fixture: ComponentFixture<BreedImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
