import { bindable } from 'aurelia-framework';
import { CheckInModel} from "../services/cb-types";

export class CheckIn {
  groupSize = '0';
  @bindable
  checkIns: CheckInModel[] = [];
  paymentMethods= ['Very Busy','Busy', 'Quiet'];

  selectedMethod = '';

  newCheckIn(){
    const checkIn={
      groupSize: parseInt(this.groupSize),
      method:this.selectedMethod,
    };
    this.checkIns.push(checkIn);
    console.log(this.checkIns)
  }
  //checkIns: CheckInModel [] = [];
  //paymentMethods= ['Very Busy','Busy', 'Quiet'];

}
