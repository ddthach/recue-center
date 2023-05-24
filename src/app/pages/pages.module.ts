import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { BreedsComponent } from './breeds/breeds.component';
import { GalleryComponent } from './gallery/gallery.component';
@NgModule({
  declarations: [GalleryComponent, BreedsComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
