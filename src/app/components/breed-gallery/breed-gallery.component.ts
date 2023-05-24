import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fallbackUrl } from 'src/app/_global-consts';
import { ResponseAPI } from 'src/app/_global-type';
import { ListOfBreedsService } from 'src/app/_servicess/breeds.service';
import { IAppState } from 'src/app/app-store/app.state';
import { selectListOfBreedOptions } from 'src/app/app-store/breeds';

@Component({
  selector: 'app-breed-gallery',
  templateUrl: './breed-gallery.component.html',
  styleUrls: ['./breed-gallery.component.scss'],
})
export class BreedGalleryComponent implements OnInit {
  modelOptions$: Observable<string[]>;
  breed: string | null;
  subBreeds: string[] = [];
  imgPath: string = fallbackUrl;

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute,
    private _listOfBreedsService: ListOfBreedsService
  ) {
    this.modelOptions$ = this._store.pipe(select(selectListOfBreedOptions));
    this.breed = this._route.snapshot.paramMap.get('breed');

    this.modelOptions$.subscribe((res: string[]) => {});

    this._route.queryParams.subscribe((params: { [key: string]: string }) => {
      const { sub } = params;
      if (!sub) {
        this._listOfBreedsService.getList().subscribe((res: ResponseAPI) => {
          const b = Object.keys(res.message)
            .filter((key) => key === this.breed)
            .map((key) => res.message[key]);
          this.subBreeds = b[0];
        });
        this.imgPath = this.breed || fallbackUrl;
      } else {
        this.subBreeds = [sub];
        this.imgPath = `${this.breed || fallbackUrl}/${sub}`;
      }
    });
  }

  ngOnInit(): void {}
}
