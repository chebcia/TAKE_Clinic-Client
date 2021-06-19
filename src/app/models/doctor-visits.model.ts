import {VisitStatusEnum} from "./visit-status.enum";

export interface DoctorVisitModel {
  "id": number,
  "date": Date,
  "note": string,
  "status": VisitStatusEnum;
}

export type DoctorVisitsModel = DoctorVisitModel[];
