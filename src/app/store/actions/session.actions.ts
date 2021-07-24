import {createAction, props} from '@ngrx/store';

export enum SessionActionsEnum {
  SetKind = '[Session] Set kind',
  SetId = '[Session] Set id',
  SetFirstName = '[Session] Set first name',
  SetLastName = '[Session] Set last name',
  SetSpeciality = '[Session] Set last name',
}

const setKind = createAction(SessionActionsEnum.SetKind, props<{ kind: SessionActionsEnum }>());
const setId = createAction(SessionActionsEnum.SetId, props<{ id: number }>());

const sessionActions = {
  setKind,
  setId,
}

export default sessionActions;
