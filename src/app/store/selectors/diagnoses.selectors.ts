import { createSelector } from "@ngrx/store";
import { selectDiagnoses } from "./index";
import { DiagnosesModel } from "../models/diagnoses.model";

export const selectDiagnosesData = createSelector(
  selectDiagnoses,
  (state: DiagnosesModel) => state.data
);

export const selectDiagnosesDataStatus = createSelector(
  selectDiagnoses,
  (state: DiagnosesModel) => state.status
);

export const selectDiagnosesDataById = (idFilter: number) => createSelector(
  selectDiagnoses,
  (state: DiagnosesModel) => state.data.find(({id}) => id === idFilter)
);

export const selectDiagnosesCreateStatus = createSelector(
  selectDiagnoses,
  (state: DiagnosesModel) => state.createStatus
);

export const selectDiagnosesEditStatus = createSelector(
  selectDiagnoses,
  (state: DiagnosesModel) => state.editStatus
);
