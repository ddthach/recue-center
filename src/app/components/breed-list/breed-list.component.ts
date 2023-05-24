import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { defaultManagerPage } from 'src/app/_global-consts';
import { PageManagerType } from 'src/app/_global-type';
import { IAppState } from 'src/app/app-store/app.state';
import { selectListOfBreeds } from 'src/app/app-store/breeds';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
})
export class BreedListComponent implements OnInit {
  model$: Observable<PageManagerType>;
  managerPage: PageManagerType = defaultManagerPage;

  constructor(private _store: Store<IAppState>) {
    this.model$ = this._store.pipe(select(selectListOfBreeds));
    this.model$.subscribe((res: PageManagerType) => {
      this.managerPage = { ...res };
    });
  }

  ngOnInit(): void {}
}
