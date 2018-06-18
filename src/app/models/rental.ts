import { User } from './user'
import { Vehicle } from './vehicle'

export class Rental {
  id: string;
  startDate: Date;
  endDate: Date;
  owner: User;
  rental: User;
  vehicle: Vehicle;
}
