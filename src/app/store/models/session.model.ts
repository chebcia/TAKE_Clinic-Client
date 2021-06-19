export enum UserTypesEnum {
  Doctor = 'doctor'
}

export interface SessionModel {
  type: UserTypesEnum;
  id: number;
  firstName: string | null;
  lastName: string | null;
  speciality?: string;
}
