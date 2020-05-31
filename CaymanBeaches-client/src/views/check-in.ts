import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import { CheckInModel, Beach} from "../services/cb-types";
import {BeachService} from "../services/beach-service";

@inject(BeachService)
export class CheckIn {
  groupSize = '0';
  @bindable
  checkIns: CheckInModel[] = [];
  paymentMethods= ['Very Busy','Busy', 'Quiet'];

  @bindable
  beaches: Beach[] =[];

  selectedMethod = '';
  selectedBeach : Beach = null;


  constructor(private bs:BeachService) {
   this.beaches = bs.beaches;
   this.checkIns = bs.checkIns;
   this.paymentMethods = bs.paymentMethods;
  }
  newCheckIn(){
    this.bs.checkIn(parseInt(this.groupSize), this.selectedMethod, this.selectedBeach);
  }

}


//checkIns: CheckInModel [] = [];
//paymentMethods= ['Very Busy','Busy', 'Quiet'];
