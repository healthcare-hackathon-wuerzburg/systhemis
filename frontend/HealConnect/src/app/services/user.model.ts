export type User = {
  username: string;
  password: string;
  docter: boolean;
}

export type Registration = {
  userType: UserType;
  firstname: string;
  secondname: string;
  gender: string;
  birthdate: string;
  cancerPosition: string;
  cancerSituation: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  operation: boolean;
  infrared: boolean;
  medicin: boolean;
  other: boolean;
}

export enum UserType {
  Patient = "Patient",
  Arzt = "Arzt",
  Arzthelfer = "Arzthelfer"
}

export type HttpResponse<T> = {
  val: T;
  status: number
}
