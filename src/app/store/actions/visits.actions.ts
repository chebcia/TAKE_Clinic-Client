import { createAction, props } from '@ngrx/store';
import { UserTypesEnum } from "../models/session.model";
import { DoctorVisitsModel } from "../../models/doctor-visits.model";
import {VisitStatusEnum} from "../../models/visit-status.enum";

export enum VisitsActionsEnum {
  FetchData = '[Visits] Fetch data',
  FetchDataSuccess = '[Visits] Fetch data success',
  FetchDataFailed = '[Visits] Fetch data failed',
  FinishData = '[Visits] Finish visit',
  FinishDataSuccess = '[Visits] Finish visit success',
  FinishDataFailed = '[Visits] Finish visit failed',
}

export interface ActionFetchStart {
  id: number;
  apiType: UserTypesEnum;
}

export interface VisitFinishStart {
  id: number;
  status: VisitStatusEnum;
}

const fetchStart = createAction(VisitsActionsEnum.FetchData, props<ActionFetchStart>());
const fetchSuccess = createAction(VisitsActionsEnum.FetchDataSuccess, props<{ data: DoctorVisitsModel }>());
const fetchFailed = createAction(VisitsActionsEnum.FetchDataFailed);

const finishStart = createAction(VisitsActionsEnum.FinishData, props<VisitFinishStart>());
const finishSuccess = createAction(VisitsActionsEnum.FinishDataSuccess);
const finishFailed = createAction(VisitsActionsEnum.FinishDataFailed);

const visitsActions = {
  fetchStart,
  fetchSuccess,
  fetchFailed,
  finishStart,
  finishSuccess,
  finishFailed,
}

export default visitsActions;
