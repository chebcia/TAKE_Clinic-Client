import {Action, createReducer, on} from '@ngrx/store';
import {ApiStatusEnum} from "../../models/api-status.enum";
import {DiseasesModel} from "../models/diseases.model";
import diseasesActions from "../actions/diseases.actions";

export const initialState: DiseasesModel = {
  status: ApiStatusEnum.Init,
  createStatus: ApiStatusEnum.Init,
  editStatus: ApiStatusEnum.Init,
  data: [],
};

const _diseasesReducer = createReducer(
  initialState,
  on(diseasesActions.fetchStart, (state) => ({ ...state, status: ApiStatusEnum.Pending })),
  on(diseasesActions.fetchSuccess, (state, { data }) => ({ ...state, status: ApiStatusEnum.Success, data })),
  on(diseasesActions.fetchFailed, (state) => ({ ...state, status: ApiStatusEnum.Failed })),
  on(diseasesActions.createReset, (state) => ({ ...state, createStatus: ApiStatusEnum.Init })),
  on(diseasesActions.createStart, (state) => ({ ...state, createStatus: ApiStatusEnum.Pending })),
  on(diseasesActions.createSuccess, (state) => ({ ...state, createStatus: ApiStatusEnum.Success })),
  on(diseasesActions.createFailed, (state) => ({ ...state, createStatus: ApiStatusEnum.Failed })),
  on(diseasesActions.editReset, (state) => ({ ...state, editStatus: ApiStatusEnum.Init })),
  on(diseasesActions.editStart, (state) => ({ ...state, editStatus: ApiStatusEnum.Pending })),
  on(diseasesActions.editSuccess, (state) => ({ ...state, editStatus: ApiStatusEnum.Success })),
  on(diseasesActions.editFailed, (state) => ({ ...state, editStatus: ApiStatusEnum.Failed })),
);

export function diseasesReducer(state: DiseasesModel | undefined, action: Action) {
  return _diseasesReducer(state, action);
}
