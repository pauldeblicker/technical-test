import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import { getAllDevisUseCaseController } from './modules/devis/useCases/getAllDevis';
import { Devis } from './modules/devis/domain/Devis';

export const buildFastify = (): FastifyInstance => {
  const app = fastify({ logger: true });

  app.register(fastifyCors, {
    origin: '*',
  });

  app.get('/devis', async (): Promise<Devis[]> => getAllDevisUseCaseController.execute());

  return app;
};

export const start = async (app: FastifyInstance): Promise<void> => {
  try {
    await app.listen({ port: 3001 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
