import { Devis } from '../domain/Devis';
import { knex } from '../../../knex';

export class DevisRepository {
  public async all(): Promise<Devis[]> {
    return knex<Devis>('devis').select('*');
  }
}
