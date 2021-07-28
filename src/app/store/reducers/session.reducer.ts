import {Action, createReducer, on} from '@ngrx/store';
import sessionActions from "../actions/session.actions";
import {SessionModel, UserTypesEnum} from "../models/session.model";

export const initialState: SessionModel = {
  type: UserTypesEnum.Doctor,
  id: 0,
};

const _actionReducer = createReducer(
  initialState,
  on(sessionActions.setKind, (state, { kind }) => ({ ...state, kind })),
  on(sessionActions.setId, (state, { id }) => ({ ...state, id })),
);

export function actionReducer(state: SessionModel | undefined, action: Action) {
  return _actionReducer(state, action);
}
