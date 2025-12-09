import { GetAllDevisUseCase } from './GetAllDevisUseCase';

export class GetAllDevisUseCaseController {
  constructor(private useCase: GetAllDevisUseCase) {}

  public async execute() {
    const result = await this.useCase.execute();

    if (!result.length) {
      throw new Error('No devis found');
    }

    return result;
  }
}
