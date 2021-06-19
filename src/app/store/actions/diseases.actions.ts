import { createAction, props } from '@ngrx/store';
import { DiseaseModel } from "../../models/disease.model";

export enum DiseasesActionsEnum {
  FetchData = '[Diseases] Fetch data',
  FetchDataSuccess = '[Diseases] Fetch data success',
  FetchDataFailed = '[Diseases] Fetch data failed',
}

const fetchStart = createAction(DiseasesActionsEnum.FetchData);
const fetchSuccess = createAction(DiseasesActionsEnum.FetchDataSuccess, props<{ data: DiseaseModel[] }>());
const fetchFailed = createAction(DiseasesActionsEnum.FetchDataFailed);

const diseasesActions = {
  fetchStart,
  fetchSuccess,
  fetchFailed
}

export default diseasesActions;
