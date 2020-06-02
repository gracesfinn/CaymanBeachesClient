import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Beach, CheckInModel, User} from "./cb-types";
import { HttpClient } from 'aurelia-http-client';




@inject(HttpClient, Aurelia, Router)
export class BeachService{

  users: Map<string, User> = new Map();
  beaches: Beach[]=[];
  checkIns: CheckInModel[] = [];
  paymentMethods = ['Very Busy', 'Busy', 'Quiet'];


  constructor(private httpClient: HttpClient,private au: Aurelia, private router: Router) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:3000');
    });
    this.getBeaches();
    this.getUsers();
  }

  async getBeaches() {
    const response = await this.httpClient.get('/api/beaches');
    this.beaches = await response.content;
    console.log (this.beaches);
  }

  async getUsers() {
    const response = await this.httpClient.get('/api/users');
    const users = await response.content;
    users.forEach(user => {
      this.users.set(user.email, user);
    });
  }



  async checkIn(groupSize:number, method:string, beach:Beach){
    const checkIn ={
      groupSize: groupSize,
      method:method,
      beach:beach
    };

    this.checkIns.push(checkIn);
    console.log('Total so far' );
  }

  signup(firstName: string, lastName: string, email: string, password: string) {
    this.changeRouter(PLATFORM.moduleName('app'))
  }

  async login(email: string, password: string) {
    this.changeRouter(PLATFORM.moduleName('app'))
  }

  /*  const user = this.users.get(email);
    if (user && (user.password === password)) {
      this.changeRouter(PLATFORM.moduleName('app'))
      return true;
    } else{
      return false;
    } */

  logout() {
    this.changeRouter(PLATFORM.moduleName('start'))
  }

  changeRouter(module:string) {
    this.router.navigate('/',{ replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }
}


