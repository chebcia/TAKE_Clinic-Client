import { createSelector } from "@ngrx/store";
import { selectDoctors } from "./index";
import { DoctorsModel } from "../models/doctors.model";

export const selectDoctorsData = createSelector(
  selectDoctors,
  (state: DoctorsModel) => state.data
);
