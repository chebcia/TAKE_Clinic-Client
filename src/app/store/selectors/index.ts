import {AppState} from "../index";

export const selectSession = (state: AppState) => state.session;
export const selectVisits = (state: AppState) => state.visits;
