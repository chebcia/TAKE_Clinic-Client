import { createSelector } from "@ngrx/store";
import { selectDiseases } from "./index";
import { DiseasesModel } from "../models/diseases.model";

export const selectDiseasesData = createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.data
);

export const selectDiseasesDataStatus = createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.status
);

export const selectDiseasesDataById = (idFilter: number) => createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.data.find(({id}) => id === idFilter)
);

export const selectDiseasesCreateStatus = createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.createStatus
);

export const selectDiseasesEditStatus = createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.editStatus
);
