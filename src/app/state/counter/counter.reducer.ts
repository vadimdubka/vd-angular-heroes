import {Action} from '@ngrx/store';
import {ActionTypes} from './counter.actions';

export const initialState = 0;

/*Defined a reducer function to manage the state of the counter*/
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
