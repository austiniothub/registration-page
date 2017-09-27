import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import { UserRegistration } from './UserRegistration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  private registrationUrl = 'https://nk4dht88sa.execute-api.us-east-2.amazonaws.com/api/users/create'

  constructor(http: Http) { }

  create(userRegistration: UserRegistration){
  	return this.http.post(this.registrationUrl, userRegistration)
  }

}
