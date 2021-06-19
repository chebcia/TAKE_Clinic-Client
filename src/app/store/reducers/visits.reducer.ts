import {Action, createReducer, on} from '@ngrx/store';
import { VisitsModel } from "../models/visits.model";
import { ApiStatusEnum } from "../../models/api-status.enum";
import visitsActions from "../actions/visits.actions";

export const initialState: VisitsModel = {
  status: ApiStatusEnum.Init,
  data: [],
};

const _visitsReducer = createReducer(
  initialState,
  on(visitsActions.fetchStart, (state) => ({ ...state, status: ApiStatusEnum.Pending })),
  on(visitsActions.fetchSuccess, (state, { data }) => ({ ...state, status: ApiStatusEnum.Success, data })),
  on(visitsActions.fetchFailed, (state) => ({ ...state, status: ApiStatusEnum.Failed, data: [] })),
);

export function visitsReducer(state: VisitsModel | undefined, action: Action) {
  return _visitsReducer(state, action);
}
