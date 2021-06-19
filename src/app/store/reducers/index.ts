import {actionReducer} from "./session.reducer";
import {visitsReducer} from "./visits.reducer";
import {doctorsReducer} from "./doctors.reducer";
import {diseasesReducer} from "./diseases.reducer";

const reducers = {
  session: actionReducer,
  visits: visitsReducer,
  doctors: doctorsReducer,
  diseases: diseasesReducer,
};

export default reducers;
