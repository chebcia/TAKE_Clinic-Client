import { SessionModel } from "./models/session.model";
import { VisitsModel } from "./models/visits.model";
import { DoctorsModel } from "./models/doctors.model";

export interface AppState {
  session: SessionModel;
  visits: VisitsModel;
  doctors: DoctorsModel;
}
