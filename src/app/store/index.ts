import { SessionModel } from "./models/session.model";
import { VisitsModel } from "./models/visits.model";
import { DoctorsModel } from "./models/doctors.model";
import { DiseasesModel } from "./models/diseases.model";
import { DiagnosesModel } from "./models/diagnoses.model";

export interface AppState {
  session: SessionModel;
  visits: VisitsModel;
  doctors: DoctorsModel;
  diseases: DiseasesModel;
  diagnoses: DiagnosesModel;
}
