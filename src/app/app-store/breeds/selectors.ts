import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IState } from './models';

const listOfBreedsState = (state: IAppState) => {
  return state.listOfBreeds;
};

export const selectListOfBreeds = createSelector(
  listOfBreedsState,
  (state: IState) => state.list
);

export const selectListOfBreedOptions = createSelector(
  listOfBreedsState,
  (state: IState) => state.breedOptions
);
