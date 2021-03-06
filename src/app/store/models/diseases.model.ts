import { ApiStatusEnum } from "../../models/api-status.enum";
import { DiseaseModel } from "../../models/disease.model";

export interface DiseasesModel {
  status: ApiStatusEnum;
  createStatus: ApiStatusEnum;
  editStatus: ApiStatusEnum;
  data: DiseaseModel[];
}
