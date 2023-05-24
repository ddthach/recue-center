import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { DividerComponent } from './_common/divider/divider.component';
import { BreedFilterComponent } from './breed-filter/breed-filter.component';
import { BreedGalleryComponent } from './breed-gallery/breed-gallery.component';
import { BreedHeroSecondaryComponent } from './breed-hero-secondary/breed-hero-secondary.component';
import { BreedHeroComponent } from './breed-hero/breed-hero.component';
import { BreedImgComponent } from './breed-img/breed-img.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    DividerComponent,
    BreedImgComponent,
    BreedFilterComponent,
    BreedGalleryComponent,
    BreedHeroComponent,
    BreedHeroSecondaryComponent,
    BreedListComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    BreedFilterComponent,
    BreedGalleryComponent,
    BreedHeroComponent,
    BreedHeroSecondaryComponent,
    BreedListComponent,
  ],
})
export class ComponentsModule {}
