import { ApiStatusEnum } from "../../models/api-status.enum";
import { DoctorVisitsModel } from "../../models/doctor-visits.model";

export interface VisitsModel {
  status: ApiStatusEnum;
  data: DoctorVisitsModel;
}
