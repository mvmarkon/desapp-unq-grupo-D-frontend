import { User } from './user'
import { Vehicle } from './vehicle'

export class Rental {
  id: string;
  startDate: Date;
  endDate: Date;
  ownerCuil: string;
  rentalCuil: string;
  vehicleID: string;
}
