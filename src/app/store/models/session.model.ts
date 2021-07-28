export enum UserTypesEnum {
  Doctor = 'doctor'
}

export interface SessionModel {
  type: UserTypesEnum;
  id: number;
  speciality?: string;
}
