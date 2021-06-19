import { createAction, props } from '@ngrx/store';
import { DoctorModel } from "../../models/doctor.model";

export enum DoctorsActionsEnum {
  FetchData = '[Doctors] Fetch data',
  FetchDataSuccess = '[Doctors] Fetch data success',
  FetchDataFailed = '[Doctors] Fetch data failed',
}

const fetchStart = createAction(DoctorsActionsEnum.FetchData);
const fetchSuccess = createAction(DoctorsActionsEnum.FetchDataSuccess, props<{ data: DoctorModel[] }>());
const fetchFailed = createAction(DoctorsActionsEnum.FetchDataFailed);

const doctorsActions = {
  fetchStart,
  fetchSuccess,
  fetchFailed
}

export default doctorsActions;
