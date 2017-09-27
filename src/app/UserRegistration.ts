export class UserRegistration {

  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public address: string,
    public familyMembers: number,
    public phoneNumber: number
  ) {  }

}

/*export Interface UserRegistrationContract{

	// email: string,
	DeviceId: number,
	info: 
	{
		firstName: string,
		lastName: string,
		address: string,
		familyMembers: number
	}
*/