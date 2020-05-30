export class CheckIn{
  groupSize = '0';
  checkIns: number[] = [];

  newCheckIn(){
    this.checkIns.push(parseInt(this.groupSize));
    console.log(this.checkIns)
  }
}
