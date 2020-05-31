export interface Beach {
  name: string;
  location: string;
  activities: string;
}

export interface CheckInModel{
  groupSize: number;
  method: string;
  beach: Beach;

}
