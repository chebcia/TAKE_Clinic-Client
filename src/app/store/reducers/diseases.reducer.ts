import {Action, createReducer, on} from '@ngrx/store';
import {ApiStatusEnum} from "../../models/api-status.enum";
import doctorsActions from "../actions/doctors.actions";
import {DiseasesModel} from "../models/diseases.model";
import diseasesActions from "../actions/diseases.actions";

export const initialState: DiseasesModel = {
  status: ApiStatusEnum.Init,
  data: [],
};

const _diseasesReducer = createReducer(
  initialState,
  on(diseasesActions.fetchStart, (state) => ({ ...state, status: ApiStatusEnum.Pending })),
  on(diseasesActions.fetchSuccess, (state, { data }) => ({ ...state, status: ApiStatusEnum.Success, data })),
  on(diseasesActions.fetchFailed, (state) => ({ ...state, status: ApiStatusEnum.Failed })),
);

export function diseasesReducer(state: DiseasesModel | undefined, action: Action) {
  return _diseasesReducer(state, action);
}
