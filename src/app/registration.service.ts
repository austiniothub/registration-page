import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import { UserRegistration, UserRegistrationContract } from './UserRegistration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  private registrationUrl = 'https://8w8irufy85.execute-api.us-east-1.amazonaws.com/api/users/create';

  constructor(public http: Http) { }

  create(userRegistration: UserRegistration){
  	const userRegistrationContract = this.convertToContract(userRegistration)
  	return this.http.post(this.registrationUrl, userRegistrationContract);
  }

  convertToContract (userRegistration: UserRegistration){
  	const contract:UserRegistrationContract;
  	contract.Email = userRegistration.Email;
  	contract.info.lastName = userRegistration.lastName;
  	contract.info.address = userRegistration.address;
  	contract.info.familyMembers = userRegistration.familyMembers;
  	contract.info.firstName = userRegistration.firstName;

  	return contract;
  }

}
