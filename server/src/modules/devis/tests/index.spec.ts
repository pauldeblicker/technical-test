import { FastifyInstance } from 'fastify';
import { buildFastify } from '../../../app';
import { knex } from '../../../knex';

describe('Devis module', () => {
  let app: FastifyInstance;

  beforeAll(() => {
    app = buildFastify();
  });

  afterAll(async () => {
    await app.close();
    await knex.destroy();
  });

  test('[GET] /devis', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/devis',
    });

    const data = await response.json();

    expect(data.length).toBe(2);
  });
});
