import { bindable } from 'aurelia-framework';
import { CheckInModel} from "../../services/cb-types";

export class CheckInForm {
  groupSize: '1';
  @bindable()
  checkIns: CheckInModel[] = [];
  @bindable
  paymentMethods: string[];


  selectedMethod = '';

  newCheckIn() {
    const checkIn = {
      groupSize: parseInt(this.groupSize),
      method: this.selectedMethod,
    };

    this.checkIns.push(checkIn);
    console.log(this.checkIns);
  }

}
