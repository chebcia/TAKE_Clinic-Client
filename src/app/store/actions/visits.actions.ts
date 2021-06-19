import { createAction, props } from '@ngrx/store';
import { UserTypesEnum } from "../models/session.model";
import { DoctorVisitsModel } from "../../models/doctor-visits.model";

export enum VisitsActionsEnum {
  FetchData = '[Visits] Fetch data',
  FetchDataSuccess = '[Visits] Fetch data success',
  FetchDataFailed = '[Visits] Fetch data failed',
}

export interface ActionFetchStart {
  id: number;
  apiType: UserTypesEnum;
}

const fetchStart = createAction(VisitsActionsEnum.FetchData, props<ActionFetchStart>());
const fetchSuccess = createAction(VisitsActionsEnum.FetchDataSuccess, props<{ data: DoctorVisitsModel }>());
const fetchFailed = createAction(VisitsActionsEnum.FetchDataFailed);

const visitsActions = {
  fetchStart,
  fetchSuccess,
  fetchFailed
}

export default visitsActions;
