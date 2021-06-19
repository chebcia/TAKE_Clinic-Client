import { ApiStatusEnum } from "../../models/api-status.enum";
import { DoctorModel } from "../../models/doctor.model";

export interface DoctorsModel {
  status: ApiStatusEnum;
  data: DoctorModel[];
}
