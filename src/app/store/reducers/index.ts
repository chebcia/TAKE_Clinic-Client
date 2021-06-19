import {actionReducer} from "./session.reducer";
import {visitsReducer} from "./visits.reducer";

const reducers = {
  session: actionReducer,
  visits: visitsReducer
};

export default reducers;
