import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import { UserRegistration, Info } from './UserRegistration';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  private registrationUrl = 'https://8w8irufy85.execute-api.us-east-1.amazonaws.com/api/users/create';

  constructor(public http: Http) { }

  create(userRegistration: any){
	  const userRegistrationContract = this.convertToContract(userRegistration)
	  console.log(userRegistrationContract)
  	return this.http.post(this.registrationUrl, userRegistrationContract);
  }

  convertToContract (userRegistration: any){
	const info = new Info(userRegistration.firstName, userRegistration.lastName, userRegistration.address, userRegistration.familyMembers, userRegistration.phoneNumber);
	const user = new UserRegistration(userRegistration.Email, info)

  	return user;
  }

}
