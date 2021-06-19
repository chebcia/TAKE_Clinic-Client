import { createAction, props } from '@ngrx/store';
import { DiseaseModel } from "../../models/disease.model";

export enum DiseasesActionsEnum {
  FetchData = '[Diseases] Fetch data',
  FetchDataSuccess = '[Diseases] Fetch data success',
  FetchDataFailed = '[Diseases] Fetch data failed',
  Create = '[Diseases] Create',
  CreateReset = '[Diseases] Create reset',
  CreateSuccess = '[Diseases] Create success',
  CreateFailed = '[Diseases] Create failed',
}

export interface DiseasesCreateStart {
  name: string;
  contagious: string;
}

const fetchStart = createAction(DiseasesActionsEnum.FetchData);
const fetchSuccess = createAction(DiseasesActionsEnum.FetchDataSuccess, props<{ data: DiseaseModel[] }>());
const fetchFailed = createAction(DiseasesActionsEnum.FetchDataFailed);

const createReset = createAction(DiseasesActionsEnum.CreateReset);
const createStart = createAction(DiseasesActionsEnum.Create, props<DiseasesCreateStart>());
const createSuccess = createAction(DiseasesActionsEnum.CreateSuccess);
const createFailed = createAction(DiseasesActionsEnum.CreateFailed);

const diseasesActions = {
  fetchStart,
  fetchSuccess,
  fetchFailed,
  createReset,
  createStart,
  createSuccess,
  createFailed
}

export default diseasesActions;
