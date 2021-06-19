import { SessionModel } from "./models/session.model";
import { VisitsModel } from "./models/visits.model";

export interface AppState {
  session: SessionModel;
  visits: VisitsModel;
}
