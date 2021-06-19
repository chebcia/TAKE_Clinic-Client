import {Action, createReducer, on} from '@ngrx/store';
import sessionActions from "../actions/session.actions";
import {SessionModel, UserTypesEnum} from "../models/session.model";

export const initialState: SessionModel = {
  type: UserTypesEnum.Doctor,
  id: 0,
  firstName: null,
  lastName: null,
};

const _actionReducer = createReducer(
  initialState,
  on(sessionActions.setKind, (state, { kind }) => ({ ...state, kind })),
  on(sessionActions.setId, (state, { id }) => ({ ...state, id })),
  on(sessionActions.setFirstName, (state, { firstName }) => ({ ...state, firstName })),
  on(sessionActions.setLastName, (state, { lastName }) => ({ ...state, lastName })),
  on(sessionActions.setSpeciality, (state, { speciality }) => ({ ...state, speciality })),
);

export function actionReducer(state: SessionModel | undefined, action: Action) {
  return _actionReducer(state, action);
}
