import { defaultManagerPage } from 'src/app/_global-consts';
import { PageManagerType } from 'src/app/_global-type';

export interface IState {
  list: PageManagerType;
  breedOptions: string[];
}

export const initialState: IState = {
  list: defaultManagerPage,
  breedOptions: [],
};
