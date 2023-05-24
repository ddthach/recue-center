import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { defaultManagerPage } from 'src/app/_global-consts';
import {
  BreedItemType,
  PageManagerType,
  ResponseAPI,
} from 'src/app/_global-type';
import { ListOfBreedsService } from 'src/app/_servicess/breeds.service';
import { IAppState } from 'src/app/app-store/app.state';
import {
  Query,
  QueryOptions,
  selectListOfBreedOptions,
  selectListOfBreeds,
} from 'src/app/app-store/breeds';

@Component({
  selector: 'app-breed-filter',
  templateUrl: './breed-filter.component.html',
  styleUrls: ['./breed-filter.component.scss'],
})
export class BreedFilterComponent implements OnInit {
  model$: Observable<PageManagerType>;
  modelOptions$: Observable<string[]>;
  pageManagerType?: PageManagerType;
  breeds: string[] = [];
  subBreeds: string[] = [];

  selectedBreed: string = '';
  selectedSubBreeds: string = '';

  constructor(
    private _store: Store<IAppState>,
    private _listOfBreedsService: ListOfBreedsService
  ) {
    this.model$ = this._store.pipe(select(selectListOfBreeds));
    this.modelOptions$ = this._store.pipe(select(selectListOfBreedOptions));
    this.model$.subscribe((res: PageManagerType) => {
      this.pageManagerType = res;
    });
    this.modelOptions$.subscribe((res: string[]) => {
      this.breeds = res;
    });

    this._listOfBreedsService.getList().subscribe((res: ResponseAPI) => {
      const items: string[] = Object.keys(res.message).map((key) => key);
      this._store.dispatch(new QueryOptions(items));
    });
    this.onSubmit();
  }

  ngOnInit(): void {}

  onChangeBreed(e: any): void {
    this.selectedBreed = e.value;
    this.subBreeds =
      this.pageManagerType?.items.find((i) => i.breed === e.value)?.subBreeds ||
      [];
  }

  onSubmit(): void {
    if (!this.selectedBreed) {
      this._listOfBreedsService.getList().subscribe((res: ResponseAPI) => {
        const items: BreedItemType[] = Object.keys(res.message).map((key) => ({
          breed: key,
          subBreeds: res.message[key],
          imgPath: key,
        }));

        this._store.dispatch(
          new Query({
            ...defaultManagerPage,
            items,
            pageSize: items.length,
            total: items.length,
          })
        );
      });
    } else {
      this._listOfBreedsService
        .geSubtList(this.selectedBreed)
        .subscribe((res: ResponseAPI) => {
          let items: BreedItemType[] = res.message
            .map((s: string) => ({
              breed: this.selectedBreed,
              subBreeds: [s],
              imgPath: `${this.selectedBreed}/${s}`,
            }))
            .filter(
              (s: BreedItemType) =>
                !this.selectedSubBreeds ||
                this.selectedSubBreeds === s.subBreeds[0]
            );

          this._store.dispatch(
            new Query({
              ...defaultManagerPage,
              items,
              pageSize: items.length,
              total: items.length,
            })
          );
        });
    }
  }
}
