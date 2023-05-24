import { ActionReducerMap } from '@ngrx/store';

import {
  IState as IDogListState,
  initialState,
  listOfBreedsReducers,
} from './breeds';

export interface IAppState {
  listOfBreeds: IDogListState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
  listOfBreeds: listOfBreedsReducers,
};

export const initialAppState: IAppState = {
  listOfBreeds: initialState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
