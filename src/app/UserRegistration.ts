export class UserRegistration {

  constructor(
    public Email: string,
    public info: Info,
  ) {  }

}

export class Info {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public familyMembers: number,
    public phoneNumber: number
  ) {  }
}