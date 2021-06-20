import {actionReducer} from "./session.reducer";
import {visitsReducer} from "./visits.reducer";
import {doctorsReducer} from "./doctors.reducer";
import {diseasesReducer} from "./diseases.reducer";
import {diagnosesReducer} from "./diagnoses.reducer";

const reducers = {
  session: actionReducer,
  visits: visitsReducer,
  doctors: doctorsReducer,
  diseases: diseasesReducer,
  diagnoses: diagnosesReducer,
};

export default reducers;
