export interface Beach {
  name: string;
  location: string;
  activities: string;
  _id: string;
}

export interface rawCheckinModel {
  groupSize: number;
  method: string;
  beach: string;
  member: string;

}

export interface CheckInModel{
  groupSize: number;
  method: string;
  beach: Beach;

}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}
