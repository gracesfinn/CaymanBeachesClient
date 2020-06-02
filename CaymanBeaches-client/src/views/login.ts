import { inject } from 'aurelia-framework';
import { BeachService } from '../services/beach-service';

@inject(BeachService)
export class Login {
  email = 'admin@caymanbeaches.com';
  password = 'secretpassword';
  prompt = '';

  constructor(private bs: BeachService) {}

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    this.bs.login(this.email, this.password);
  }

}


/* async login(e) {
    console.log(`Trying to log in ${this.email}`);
    const success = await this.bs.login(this.email, this.password);
    if (!success) {
      this.prompt = "Oops! Try again...";
    }
  }*/
