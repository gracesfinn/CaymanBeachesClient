import { inject } from 'aurelia-framework';
 import{ BeachService} from "../services/beach-service";

 @inject(BeachService)
 export class Logout {
   constructor(private bs: BeachService){}

   attached(){
     this.bs.logout();
   }
 }
