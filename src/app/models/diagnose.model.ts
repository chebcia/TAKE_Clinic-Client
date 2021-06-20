import { DoctorVisitModel } from "./doctor-visits.model";

export interface DiagnoseModel {
  id: number;
  note: string;
  visit: DoctorVisitModel;
  disease: DiagnoseModel;
}
