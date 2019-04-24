import {Action} from '@ngrx/store';

/*Defined actions to express events*/
export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}

export class IncrementAction implements Action {
  readonly type = ActionTypes.Increment;
}

export class DecrementAction implements Action {
  readonly type = ActionTypes.Decrement;
}

export class ResetAction implements Action {
  readonly type = ActionTypes.Reset;
}
