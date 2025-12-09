import { Devis } from '../../domain/Devis';
import { GetAllDevisUseCase } from './GetAllDevisUseCase';

export class GetAllDevisUseCaseController {
  constructor(private readonly useCase: GetAllDevisUseCase) {}

  public async execute(): Promise<Devis[]> {
    return this.useCase.execute();
  }
}
