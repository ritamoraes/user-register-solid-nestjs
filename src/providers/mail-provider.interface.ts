interface Address {
  name: string;
  email: string;
}

export interface Message {
  to: Address;
  from: Address;
  subject: string;
  body: string;
}
export interface MailProvider {
  sendMail(message: Message);
}
