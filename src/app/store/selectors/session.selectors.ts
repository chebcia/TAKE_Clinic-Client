import {createSelector} from "@ngrx/store";
import {selectSession} from "./index";
import {SessionModel} from "../models/session.model";

export const selectSessionType = createSelector(
  selectSession,
  (state: SessionModel) => state.type
);

export const selectSessionId = createSelector(
  selectSession,
  (state: SessionModel) => state.id
);
