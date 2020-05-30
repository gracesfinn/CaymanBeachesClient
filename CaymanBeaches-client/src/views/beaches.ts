import { Beach } from '../services/cb-types';

export class Beaches {
  name: string;
  location: string;
  activities: string;
  beaches: Beach[] = [];

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
