import { createSelector } from "@ngrx/store";
import { selectVisits } from "./index";
import { VisitsModel } from "../models/visits.model";

export const selectVisitsData = createSelector(
  selectVisits,
  (state: VisitsModel) => state.data
);

export const selectVisitsDataStatus = createSelector(
  selectVisits,
  (state: VisitsModel) => state.status
);
