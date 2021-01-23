export class Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(
    name: string,
    email: string,
    phoneNumber: string
  ) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
