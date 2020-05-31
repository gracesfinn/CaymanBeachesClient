import { inject } from 'aurelia-framework';
import { Beach, CheckInModel, User} from "./cb-types";
import { HttpClient } from 'aurelia-http-client';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(HttpClient)
export class BeachService{

  users: Map<string, User> = new Map();
  beaches: Beach[]=[];
  checkIns: CheckInModel[] = [];
  paymentMethods = ['Very Busy', 'Busy', 'Quiet'];


  constructor(private httpClient: HttpClient, private ea: EventAggregator) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:8080');
    });
    this.getBeaches();
    this.getUsers();
  }

  async getUsers() {
    const response = await this.httpClient.get('/api/users.json');
    const users = await response.content;
    users.forEach(user => {
      this.users.set(user.email, user);
    });
  }


  async getBeaches() {
    const response = await this.httpClient.get('/api/beaches.json');
    this.beaches = await response.content;
    console.log (this.beaches);
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
}


