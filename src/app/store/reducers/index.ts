import {actionReducer} from "./session.reducer";
import {visitsReducer} from "./visits.reducer";
import {doctorsReducer} from "./doctors.reducer";

const reducers = {
  session: actionReducer,
  visits: visitsReducer,
  doctors: doctorsReducer,
};

export default reducers;
