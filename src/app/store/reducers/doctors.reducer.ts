import {Action, createReducer, on} from '@ngrx/store';
import {DoctorsModel} from "../models/doctors.model";
import {ApiStatusEnum} from "../../models/api-status.enum";
import doctorsActions from "../actions/doctors.actions";

export const initialState: DoctorsModel = {
  status: ApiStatusEnum.Init,
  data: [],
};

const _doctorsReducer = createReducer(
  initialState,
  on(doctorsActions.fetchStart, (state) => ({ ...state, status: ApiStatusEnum.Pending })),
  on(doctorsActions.fetchSuccess, (state, { data }) => ({ ...state, status: ApiStatusEnum.Success, data })),
  on(doctorsActions.fetchFailed, (state) => ({ ...state, status: ApiStatusEnum.Failed })),
);

export function doctorsReducer(state: DoctorsModel | undefined, action: Action) {
  return _doctorsReducer(state, action);
}
