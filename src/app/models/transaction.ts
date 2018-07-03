import { Rental } from './rental'

export class Transaction {
  id: string;
  cost: number;
  create: Date;
  lastUpdate: Date;
  state: string;
  rental: Rental;
}


// cuando mando el Transactio para el create solamente tengo que mandarlo con el cost y el rental
