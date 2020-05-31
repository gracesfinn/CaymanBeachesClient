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

  newCheckIn(){
    const checkIn={
      groupSize: parseInt(this.groupSize),
      method:this.selectedMethod,
      beach: this.selectedBeach
    };
    this.checkIns.push(checkIn);
    console.log(this.checkIns)
  }


  constructor(private bs:BeachService) {
   this.beaches = bs.beaches;
  }

}


//checkIns: CheckInModel [] = [];
//paymentMethods= ['Very Busy','Busy', 'Quiet'];
