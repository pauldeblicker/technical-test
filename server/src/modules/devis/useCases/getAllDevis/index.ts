import { devisRepository } from '../../repositories';
import { GetAllDevisUseCaseController } from './getAllDevisController';
import { GetAllDevisUseCase } from './GetAllDevisUseCase';

const getAllDevisUseCase = new GetAllDevisUseCase(devisRepository);
const getAllDevisUseCaseController = new GetAllDevisUseCaseController(getAllDevisUseCase);

export { getAllDevisUseCaseController };
