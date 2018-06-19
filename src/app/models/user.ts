import { Vehicle } from './vehicle';
import { CurrentAccount } from './currentAccount';
export class User {
  name: string;
  cuil: string;
  email: string;
  currentAccount: CurrentAccount;
  surname: string;
  address: string;
  vehicles: Array<Vehicle>;
}
