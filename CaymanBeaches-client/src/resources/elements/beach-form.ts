import { bindable } from 'aurelia-framework';
import { Beach } from '../../services/cb-types';

export class BeachForm {
  name: string;
  location: string;
  activities: string;
  @bindable
  beaches: Beach[];

  addBeach() {
    const beach = {
      name: this.name,
      location: this.location,
      activities: this.activities
    };
    this.beaches.push(beach);
    console.log(beach);
  }

}

