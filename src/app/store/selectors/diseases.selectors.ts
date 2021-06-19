import { createSelector } from "@ngrx/store";
import { selectDiseases } from "./index";
import { DiseasesModel } from "../models/diseases.model";

export const selectDiseasesData = createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.data
);

export const selectDiseasesCreateStatus = createSelector(
  selectDiseases,
  (state: DiseasesModel) => state.createStatus
);
