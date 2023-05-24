import { EListOfBreedsActionTypes, ListOfBreedsActions } from './actions';
import { IState, initialState } from './models';

export function listOfBreedsReducers(
  state = initialState,
  action: ListOfBreedsActions
): IState {
  switch (action.type) {
    case EListOfBreedsActionTypes.QUERY_OPTIONS: {
      return {
        ...state,
        breedOptions: action.payload,
      };
    }

    case EListOfBreedsActionTypes.QUERY: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
}
