import { createAction, props } from '@ngrx/store';
import { DiseaseModel } from "../../models/disease.model";
import {DiagnosesModel} from "../models/diagnoses.model";
import {DiagnoseModel} from "../../models/diagnose.model";

export enum DiagnosesActionsEnum {
  FetchData = '[Diagnoses] Fetch data',
  FetchDataSuccess = '[Diagnoses] Fetch data success',
  FetchDataFailed = '[Diagnoses] Fetch data failed',
  Create = '[Diagnoses] Create',
  CreateReset = '[Diagnoses] Create reset',
  CreateSuccess = '[Diagnoses] Create success',
  CreateFailed = '[Diagnoses] Create failed',
  Edit = '[Diagnoses] Edit',
  EditReset = '[Diagnoses] Edit reset',
  EditSuccess = '[Diagnoses] Edit success',
  EditFailed = '[Diagnoses] Edit failed',
}

export interface DiagnosesCreateStart {
  note: string;
  diseaseId: number;
  visitId: number;
}

export interface DiagnosesEditStart extends DiagnosesCreateStart {
  id: number;
}

const fetchStart = createAction(DiagnosesActionsEnum.FetchData);
const fetchSuccess = createAction(DiagnosesActionsEnum.FetchDataSuccess, props<{ data: DiagnoseModel[] }>());
const fetchFailed = createAction(DiagnosesActionsEnum.FetchDataFailed);

const createReset = createAction(DiagnosesActionsEnum.CreateReset);
const createStart = createAction(DiagnosesActionsEnum.Create, props<DiagnosesCreateStart>());
const createSuccess = createAction(DiagnosesActionsEnum.CreateSuccess);
const createFailed = createAction(DiagnosesActionsEnum.CreateFailed);

const editReset = createAction(DiagnosesActionsEnum.EditReset);
const editStart = createAction(DiagnosesActionsEnum.Edit, props<DiagnosesEditStart>());
const editSuccess = createAction(DiagnosesActionsEnum.EditSuccess);
const editFailed = createAction(DiagnosesActionsEnum.EditFailed);

const diagnosesActions = {
  fetchStart,
  fetchSuccess,
  fetchFailed,
  createReset,
  createStart,
  createSuccess,
  createFailed,
  editReset,
  editStart,
  editSuccess,
  editFailed,
}

export default diagnosesActions;
