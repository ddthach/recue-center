import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BreedsComponent } from './pages/breeds/breeds.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/breeds',
      },
      {
        path: 'breeds',
        component: BreedsComponent,
      },
      {
        path: 'gallery/:breed',
        component: GalleryComponent,
      },
    ],
  },
];

export default routes;
