import { Action } from '@ngrx/store';
import { PageManagerType } from 'src/app/_global-type';

export enum EListOfBreedsActionTypes {
  QUERY = '[LIST_OF_BREEDS]_QUERY',
  QUERY_OPTIONS = '[LIST_OF_BREEDS]_QUERY_OPTIONS',
}

export class Query implements Action {
  public readonly type = EListOfBreedsActionTypes.QUERY;
  constructor(readonly payload: PageManagerType) {}
}

export class QueryOptions implements Action {
  readonly type = EListOfBreedsActionTypes.QUERY_OPTIONS;
  constructor(readonly payload: string[]) {}
}

export type ListOfBreedsActions = Query | QueryOptions;
