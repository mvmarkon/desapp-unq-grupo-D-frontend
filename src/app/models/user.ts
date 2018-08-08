import { Vehicle } from './vehicle';
import { CurrentAccount } from './currentAccount';
import { Score } from './score'

export class User {
  name: string;
  cuil: string;
  email: string;
  currentAccount: CurrentAccount;
  surname: string;
  address: string;
  vehicles: Array<Vehicle>;
  puntuations: Array <Score>;
}
