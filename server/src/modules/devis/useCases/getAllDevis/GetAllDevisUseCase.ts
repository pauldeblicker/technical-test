import { DevisRepository } from '../../repositories/DevisRepository';

export class GetAllDevisUseCase {
  constructor(private devisRepository: DevisRepository) {}

  execute() {
    return this.devisRepository.all();
  }
}
