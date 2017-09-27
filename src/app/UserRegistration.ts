export class UserRegistration {

  constructor(
    public Email: string,
    public firstName: string,
    public lastName: string,
    public address: string,
    public familyMembers: number,
    public phoneNumber: number
  ) {  }

}

export interface UserRegistrationContract{

	Email: string;
	info: 
	{
		firstName: string;
		lastName: string;
		address: string;
		familyMembers: number;
	};
}