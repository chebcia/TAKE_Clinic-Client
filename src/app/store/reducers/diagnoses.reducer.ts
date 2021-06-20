import {Action, createReducer, on} from '@ngrx/store';
import {ApiStatusEnum} from "../../models/api-status.enum";
import {DiagnosesModel} from "../models/diagnoses.model";
import diagnosesActions from "../actions/diagnoses.actions";

export const initialState: DiagnosesModel = {
  status: ApiStatusEnum.Init,
  createStatus: ApiStatusEnum.Init,
  editStatus: ApiStatusEnum.Init,
  data: [],
};

const _diagnosesReducer = createReducer(
  initialState,
  on(diagnosesActions.fetchStart, (state) => ({ ...state, status: ApiStatusEnum.Pending })),
  on(diagnosesActions.fetchSuccess, (state, { data }) => ({ ...state, status: ApiStatusEnum.Success, data })),
  on(diagnosesActions.fetchFailed, (state) => ({ ...state, status: ApiStatusEnum.Failed })),
  on(diagnosesActions.createReset, (state) => ({ ...state, createStatus: ApiStatusEnum.Init })),
  on(diagnosesActions.createStart, (state) => ({ ...state, createStatus: ApiStatusEnum.Pending })),
  on(diagnosesActions.createSuccess, (state) => ({ ...state, createStatus: ApiStatusEnum.Success })),
  on(diagnosesActions.createFailed, (state) => ({ ...state, createStatus: ApiStatusEnum.Failed })),
  on(diagnosesActions.editReset, (state) => ({ ...state, editStatus: ApiStatusEnum.Init })),
  on(diagnosesActions.editStart, (state) => ({ ...state, editStatus: ApiStatusEnum.Pending })),
  on(diagnosesActions.editSuccess, (state) => ({ ...state, editStatus: ApiStatusEnum.Success })),
  on(diagnosesActions.editFailed, (state) => ({ ...state, editStatus: ApiStatusEnum.Failed })),
);

export function diagnosesReducer(state: DiagnosesModel | undefined, action: Action) {
  return _diagnosesReducer(state, action);
}
