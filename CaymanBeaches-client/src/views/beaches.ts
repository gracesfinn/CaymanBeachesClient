import { inject } from 'aurelia-framework';
import { Beach } from '../services/cb-types';
import { BeachService } from '../services/beach-service';

@inject(BeachService)
export class Beaches {

  beaches: Beach[] = [];

  constructor(private bs: BeachService){
    this.beaches = bs.beaches;
  }

}
