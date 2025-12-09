import { DevisRepository } from '../../repositories/DevisRepository';

export class GetAllDevisUseCase {
  constructor(private readonly devisRepository: DevisRepository) {}

  execute() {
    return this.devisRepository.all();
  }
}
