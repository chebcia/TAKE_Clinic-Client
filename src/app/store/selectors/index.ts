import {AppState} from "../index";

export const selectSession = (state: AppState) => state.session;
export const selectVisits = (state: AppState) => state.visits;
export const selectDoctors = (state: AppState) => state.doctors;
export const selectDiseases = (state: AppState) => state.diseases;
