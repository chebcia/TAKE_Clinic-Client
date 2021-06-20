import { ApiStatusEnum } from "../../models/api-status.enum";
import {DiagnoseModel} from "../../models/diagnose.model";

export interface DiagnosesModel {
  status: ApiStatusEnum;
  createStatus: ApiStatusEnum;
  editStatus: ApiStatusEnum;
  data: DiagnoseModel[];
}
