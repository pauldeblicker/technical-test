import { Devis } from '../../domain/Devis';
import { DevisRepository } from '../../repositories/DevisRepository';

export class GetAllDevisUseCase {
  constructor(private readonly devisRepository: DevisRepository) {}

  execute(): Promise<Devis[]> {
    return this.devisRepository.all();
  }
}
